import clientPromise from "@/lib/dbClient";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function DELETE(req) {
  try {
    const { id } = await req.json(); // id from body
    const client = await clientPromise;
    const db = client.db("collegeDB");
    const collection = db.collection("colleges");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "College deleted successfully" });
    } else {
      return NextResponse.json(
        { error: "College not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
