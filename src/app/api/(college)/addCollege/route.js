import clientPromise from '@/lib/dbClient';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db('collegeDB');
    const collection = db.collection('colleges');

    const result = await collection.insertOne(body);

    return NextResponse.json({
      message: 'College added successfully',
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error('Error inserting college:', error);
    return NextResponse.json(
      { error: 'Failed to add college' },
      { status: 500 }
    );
  }
}
