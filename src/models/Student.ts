import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    graduationYear: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true, // student / fresher / working
    },
    program: {
      type: String,
      required: true,
    },

    // 🔒 Backend-only fields
    tier: {
      type: String,
      enum: ["Beginner", "Advanced"],
    },
    leadStatus: {
      type: String,
      default: "New", // New → Contacted → Interested → Enrolled
    },
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
