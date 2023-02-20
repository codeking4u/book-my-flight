import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config()

const connectionString = process.env.DB_CONNECTION_STRING || "";

const client = new MongoClient(connectionString);

async function connectToDatabase() {
  let conn;
  try {
    conn = await client.connect();
    console.log("Connected to MongoDB!");
  } catch (e) {
    console.error(e);
  }
  let db = conn.db("flightDB");
  return db;
}

export default connectToDatabase;
