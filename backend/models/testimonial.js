import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: String, required: true },  // URL to image
  content: { type: String, required: true },
  rating: { type: Number, default: 5 },
  program: { type: String, required: true },  // e.g., "Full-Stack Development"
}, { timestamps: true });

export default mongoose.model("Testimonial", TestimonialSchema);