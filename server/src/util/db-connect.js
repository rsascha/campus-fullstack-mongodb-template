import mongoose from "mongoose";
import { config } from "../config.js";

async function connect() {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  const connectionString = config.MONGO_DB_URL;
  await mongoose.connect(connectionString);
}

export const db = { connect };

export default db;
