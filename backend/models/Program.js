import mongoose from "mongoose";

const ProgramSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },  // e.g., "ENGINEERING & TECH"
    title: { type: String, required: true },     // e.g., "Full-Stack Development"
    description: { type: String, required: true },  // e.g., "Master both frontend and backend..."
    duration: { type: String, required: true },  // e.g., "6 months"
    enrolled: { type: Number, default: 0 },      // e.g., 2500
    rating: { type: Number, default: 4.5 },      // e.g., 4.9
    price: { type: Number, required: true },     // e.g., 19999 (in INR)
    curriculum: [{ type: String }],              // Array of strings, e.g., ["HTML, CSS, JavaScript", "React & Redux"]
    projects: [{ type: String }],                // Array of strings, e.g., ["E-Commerce Platform", "Social Media App"]
  },
  { timestamps: true }
);

export default mongoose.model("Program", ProgramSchema);