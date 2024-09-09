import { MongoClient, Db, ServerApiVersion } from "mongodb";
import { config } from "../configs/env.config";

const uri = config.ATLAS_URI

if (!uri) {
  throw new Error("ATLAS_URI environment variable is not set.");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db: Db;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Database connected successfully");
    db = client.db("sample_training");
    // db.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process if the connection fails
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}

async function closeConnection() {
  try {
    await client.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error closing the database connection:", error);
  }
}


process.on('SIGINT', closeConnection); // Handle termination signals
process.on('SIGTERM', closeConnection);

export { db, connectToDatabase, closeConnection };
