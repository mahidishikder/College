import clientPromise from "@/lib/dbClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("collegeDB");
    const collection = db.collection("colleges");

    const colleges = await collection.find({}).toArray();

    return NextResponse.json(colleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return NextResponse.json(
      { error: "Failed to fetch colleges" },
      { status: 500 }
    );
  }
}


