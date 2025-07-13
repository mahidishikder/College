import clientPromise from "@/lib/dbClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("collegeDB");
    const collection = db.collection("admission");

    const admission = await collection.find({}).toArray();

    return NextResponse.json(admission);
  } catch (error) {
    console.error("Error fetching admission:", error);
    return NextResponse.json(
      { error: "Failed to fetch admission" },
      { status: 500 }
    );
  }
}