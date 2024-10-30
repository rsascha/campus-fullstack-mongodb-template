import db from "./db-connect.js";
import { User } from "../models/User.js";

export const initDb = async () => {
  await db.connect();

  const users = await User.find({});
  if (users.length > 0) {
    console.log("Database already initialized!");
    return;
  }

  // Initialize the database

  const johnDoe = new User({ name: "John Doe", age: 29 });
  await johnDoe.save();

  const janeDoe = new User({ name: "Jane Doe", age: 25 });
  await janeDoe.save();

  console.log("Database initialized!");
};

export default initDb;
