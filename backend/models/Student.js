import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      // unique: true,
      lowercase: true,
      trim: true,
    },
    phone: { type: String, required: true },
    location: { type: String, required: false },
    education: { type: String, required: false },
    branch: { type: String, required: false },
    graduationYear: { type: String, required: false },
    status: { type: String, required: false },
    program: { type: String, required: true },

    // Tier & Lead Management
    tier: {
      type: String,
      enum: ["Beginner", "Advanced"],
      default: "Beginner",
    },
    leadStatus: {
      type: String,
      enum: ["New", "Contacted", "Interested", "Enrolled", "Rejected"],
      default: "New",
    },

    // Payment & Enrollment fields
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    enrollmentStatus: {
      type: String,
      enum: ["pending", "enrolled", "dropped"],
      default: "pending",
    },
    enrollmentId: {
      type: String,
      unique: true,
      sparse: true, // allows null until generated
    },
    transactionId: String,
    paidAt: Date,

    // Future use (documents upload)
    documents: [
      {
        type: { type: String }, // e.g. "aadhaar", "resume", "marksheet"
        url: String,
        originalName: String,
        uploadedAt: { type: Date, default: Date.now },
        verified: { type: Boolean, default: false },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Auto-generate unique enrollmentId when payment is confirmed
// StudentSchema.pre("save", function (next) {
//   if (!this.enrollmentId && this.paymentStatus === "paid") {
//     const year = new Date().getFullYear().toString().slice(-2);
//     const random = Math.floor(100000 + Math.random() * 900000);
//     this.enrollmentId = `ALGO${year}${random}`;
//   }
//   next();
// });

export default mongoose.model("Student", StudentSchema);