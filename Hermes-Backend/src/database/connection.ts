// import { MongoClient, Db, ServerApiVersion } from "mongodb";
import { config } from "../configs/env.config";
import mongoose from "mongoose";

const uri = config.ATLAS_URI


async function connectToDatabase() {
  if (uri) {
    mongoose.connect(uri)
      .then(() => console.log("Database connected successfully"))
      .catch((error) => {
        console.error("Failed to connect to database", error);
        process.exit(1);
      })
  } else {
    throw new Error("ATLAS_URI environment variable is not set.");
  }
  // try {
  //   await client.connect();
  //   console.log("Database connected successfully");
  //   db = client.db("sample_training");
  //   // db.command({ ping: 1 });
  //   console.log("Pinged your deployment. You successfully connected to MongoDB!");
  // } catch (error) {
  //   console.error("Failed to connect to the database:", error);
  //   process.exit(1); // Exit the process if the connection fails
  // } finally {
  //   // Ensures that the client will close when you finish/error
  //   await client.close();
  // }
  //
}

async function closeConnection() {
  try {
    await mongoose.disconnect()
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error closing the database connection:", error);
    process.exit(1);
  }
}


process.on('SIGINT', closeConnection); // Handle termination signals
process.on('SIGTERM', closeConnection);

export { connectToDatabase, closeConnection };
