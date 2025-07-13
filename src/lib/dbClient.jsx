// lib/dbClient.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri); // deprecated options সরানো হয়েছে

const clientPromise = client.connect();

export default clientPromise;
