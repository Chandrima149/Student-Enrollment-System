import mongoose from "mongoose";

const SuccessStorySchema = new mongoose.Schema({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: String, required: true }, // URL to profile photo
  rating: { type: Number, min: 1, max: 5, default: 5 },
  program: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("SuccessStory", SuccessStorySchema);