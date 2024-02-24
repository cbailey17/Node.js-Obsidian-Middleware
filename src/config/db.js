// db.js
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let dbConnection;

export const mongoConnect = async () => {
  if (!dbConnection) {
    await client.connect();
    dbConnection = client.db("AppleHealth");  
    console.log("Successfully connected to MongoDB.");
  }
  return dbConnection;
};

export const getDb = () => {
  if (!dbConnection) {
    throw new Error('Database not initialized');
  }
  return dbConnection;
};
