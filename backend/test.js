import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected!");
    const Test = mongoose.model("Test", new mongoose.Schema({ name: String }));
    const doc = new Test({ name: "Hello" });
    await doc.save();
    console.log("Saved successfully!");
    process.exit();
  })
  .catch(err => console.error(err));
