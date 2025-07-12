// lib/dbClient.js
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://collegeDB:7QSYEvBeDgZZvENu@cluster0.xf2ny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clientPromise = client.connect();

export default clientPromise;
