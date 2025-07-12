import clientPromise from "@/lib/dbClient";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function PATCH(req) {
  try {
    const { id, updateData } = await req.json(); 

    const client = await clientPromise;
    const db = client.db("collegeDB");
    const collection = db.collection("colleges");

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.modifiedCount === 1) {
      return NextResponse.json({ message: "College updated successfully" });
    } else {
      return NextResponse.json(
        { error: "College not found or nothing changed" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
