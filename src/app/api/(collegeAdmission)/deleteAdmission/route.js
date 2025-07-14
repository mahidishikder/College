// app/api/deleteAdmission/route.js
import clientPromise from "@/lib/dbClient";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("collegeDB");
    const collection = db.collection("admission");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "Application deleted successfully" });
    } else {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
