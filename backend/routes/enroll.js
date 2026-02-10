// const express = require("express");
// const router = express.Router();
// const Student = require("../models/Student");

// router.post("/", async (req, res) => {
//   try {
//     const data = req.body;

//     let tier = "Beginner";
//     if (
//       data.education === "Graduate" ||
//       data.education === "Post Graduate" ||
//       data.status === "working"
//     ) {
//       tier = "Advanced";
//     }

//     const student = await Student.create({
//       ...data,
//       tier,
//     });

//     res.status(201).json({ success: true, student });
//   } catch (err) {
//     res.status(500).json({ success: false });
//   }
// });

// module.exports = router;

// import express from "express";
// import Student from "../models/Student.js";  // Note: add .js extension

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const data = req.body;

//     // Calculate tier logic
//     let tier = "Beginner";
//     if (
//       data.education === "Graduate" ||
//       data.education === "Post Graduate" ||
//       data.status === "working"
//     ) {
//       tier = "Advanced";
//     }

//     const student = await Student.create({
//       ...data,
//       tier,
//     });

//     res.status(201).json({ success: true, student });
//   } catch (err) {
//     console.error("Error in enroll route:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
//   console.log("New enrollment received:", data.name, data.email);
// console.log("Assigned tier:", tier);
// });

// export default router;  // ← This is the most important line
//*** */
// import express from "express";
// import Student from "../models/Student.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   console.log("╔════════════════════════════════════════════╗");
//   console.log("POST /api/enroll received at", new Date().toISOString());
//   console.log("Received raw body:", JSON.stringify(req.body, null, 2));
//   console.log("╚════════════════════════════════════════════╝");

//   try {
//     const data = req.body;

//     // Log individual fields for debugging
//     console.log("Key fields check:");
//     console.log("  name:           ", data.name || "(missing)");
//     console.log("  email:          ", data.email || "(missing)");
//     console.log("  phone:          ", data.phone || "(missing)");
//     console.log("  location:       ", data.location || "(missing)");
//     console.log("  education:      ", data.education || "(missing)");
//     console.log("  branch:         ", data.branch || "(missing)");
//     console.log("  graduationYear: ", data.graduationYear || "(missing)");
//     console.log("  status:         ", data.status || "(missing)");
//     console.log("  program:        ", data.program || "(missing)");

//     // Basic validation
//     if (!data.name || !data.email || !data.phone || !data.program) {
//       console.log("Basic validation failed - missing required fields");
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields (name, email, phone, program)",
//       });
//     }

//     // Tier assignment
//     let tier = "Beginner";
//     if (
//       data.education === "Graduate" ||
//       data.education === "Post Graduate" ||
//       data.status === "working"
//     ) {
//       tier = "Advanced";
//     }
//     console.log("Assigned tier:", tier);

//     // Create record
//     const student = await Student.create({
//       ...data,
//       tier,
//       paymentStatus: "pending",
//       enrollmentStatus: "pending",
//     });

//     console.log("Student created successfully → _id:", student._id);
//     console.log("Generated enrollmentId (if any):", student.enrollmentId);

//     res.status(201).json({
//       success: true,
//       message: "Enrollment created successfully",
//       student: {
//         _id: student._id,
//         enrollmentId: student.enrollmentId || null,
//         name: student.name,
//         email: student.email,
//         phone: student.phone,
//         program: student.program,
//         tier: student.tier,
//         leadStatus: student.leadStatus,
//         paymentStatus: student.paymentStatus,
//       },
//     });
 
//     } catch (err) {
//   console.error("╔══════════════════════════════ ENROLL ERROR ══════════════════════════════╗");
//   console.error("Time:            ", new Date().toISOString());
//   console.error("Error name:      ", err.name || "(no name)");
//   console.error("Error message:   ", err.message || "(no message)");
//   console.error("Error code:      ", err.code || "(no code)");

//   if (err.name === "ValidationError" && err.errors) {
//     console.error("VALIDATION FAILURES:");
//     Object.keys(err.errors).forEach(field => {
//       const e = err.errors[field];
//       console.error(`  • ${field.padEnd(20)} → ${e.message}`);
//       console.error(`      received: ${JSON.stringify(e.value)}`);
//       console.error(`      kind:     ${e.kind || "unknown"}`);
//     });
//   } else if (err.code === 11000) {
//     console.error("→ DUPLICATE KEY ERROR (most likely email already used)");
//   } else if (err.name === "MongoServerError") {
//     console.error("→ MongoDB server-side error");
//   }

//   console.error("Full error:", JSON.stringify(err, null, 2));
//   console.error("Stack (top lines):", err.stack?.split("\n").slice(0, 10).join("\n"));
//   console.error("╚══════════════════════════════════════════════════════════════════════════╝");

//   res.status(500).json({
//     success: false,
//     message: "Server error during enrollment",
//     errorType: err.name,
//     errorDetail: err.message || "Unknown error",
//     validationFields: err.errors ? Object.keys(err.errors) : null
//   });
//   }
// });
//*** */
// router.post("/", async (req, res) => {
//   try {
//     const data = req.body;

//     // Basic server-side validation (optional but recommended)
//     if (!data.name || !data.email || !data.phone || !data.program) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields",
//       });
//     }

//     // Tier assignment logic
//     let tier = "Beginner";
//     if (
//       data.education === "Graduate" ||
//       data.education === "Post Graduate" ||
//       data.status === "working"
//     ) {
//       tier = "Advanced";
//     }

//     // Create student record
//     const student = await Student.create({
//       ...data,
//       tier,
//       // leadStatus: "New" ← already default
//       paymentStatus: "pending",
//       enrollmentStatus: "pending",
//     });

//     console.log("New enrollment received:", student.name, student.email);
//     console.log("Assigned tier:", student.tier);

//     res.status(201).json({
//       success: true,
//       message: "Enrollment created successfully",
//       student: {
//         _id: student._id,
//         enrollmentId: student.enrollmentId || null,
//         name: student.name,
//         email: student.email,
//         phone: student.phone,
//         program: student.program,
//         tier: student.tier,
//         leadStatus: student.leadStatus,
//         paymentStatus: student.paymentStatus,
//       },
//     });
//   } catch (err) {
//     console.error("Error in enroll route:", err);

//     // Handle duplicate email gracefully
//     if (err.code === 11000) {
//       return res.status(409).json({
//         success: false,
//         message: "Email already registered",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "Server error during enrollment",
//       error: err.message,
//     });
//   }
// });

// router.post("/", async (req, res) => {
//   console.log("╔════════════════════════════════════════════╗");
//   console.log("POST /api/enroll received at", new Date().toISOString());
//   console.log("Received raw body:", JSON.stringify(req.body, null, 2));
//   console.log("╚════════════════════════════════════════════╝");

//   try {
//     const data = req.body;

//     // Log individual required fields to spot missing/empty ones quickly
//     console.log("Key fields check:");
//     console.log("  name:", data.name || "(missing)");
//     console.log("  email:", data.email || "(missing)");
//     console.log("  phone:", data.phone || "(missing)");
//     console.log("  location:", data.location || "(missing)");
//     console.log("  education:", data.education || "(missing)");
//     console.log("  branch:", data.branch || "(missing)");
//     console.log("  graduationYear:", data.graduationYear || "(missing)");
//     console.log("  status:", data.status || "(missing)");
//     console.log("  program:", data.program || "(missing)");

//     // Your existing basic validation
//     if (!data.name || !data.email || !data.phone || !data.program) {
//       console.log("Basic validation failed - missing required fields");
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields (name, email, phone, program)",
//       });
//     }

//     // Tier assignment logic
//     let tier = "Beginner";
//     if (
//       data.education === "Graduate" ||
//       data.education === "Post Graduate" ||
//       data.status === "working"
//     ) {
//       tier = "Advanced";
//     }

//     console.log("Assigned tier:", tier);

//     // Create student record
//     const student = await Student.create({
//       ...data,
//       tier,
//       paymentStatus: "pending",
//       enrollmentStatus: "pending",
//     });

//     console.log("Student created successfully → _id:", student._id);
//     console.log("Generated enrollmentId (if any):", student.enrollmentId);

//     res.status(201).json({
//       success: true,
//       message: "Enrollment created successfully",
//       student: {
//         _id: student._id,
//         enrollmentId: student.enrollmentId || null,
//         name: student.name,
//         email: student.email,
//         phone: student.phone,
//         program: student.program,
//         tier: student.tier,
//         leadStatus: student.leadStatus,
//         paymentStatus: student.paymentStatus,
//       },
//     });
//////
//   } catch (err) {
//     console.error("╔══════ ENROLLMENT POST ERROR ══════╗");
//     console.error("Error name:", err.name);
//     console.error("Error message:", err.message);

//     if (err.name === "ValidationError") {
//       console.error("Validation errors:");
//       Object.keys(err.errors || {}).forEach((key) => {
//         const error = err.errors[key];
//         console.error(`  • ${key}: ${error.message} (value was: ${error.value || "undefined"})`);
//       });
//     } else if (err.code === 11000) {
//       console.error("Duplicate key error (likely email)");
//       return res.status(409).json({
//         success: false,
//         message: "Email already registered",
//       });
//     }

//     console.error("Full error:", err);
//     console.error("Stack:", err.stack);
//     console.error("╚══════════════════════════════════════╝");

//     res.status(500).json({
//       success: false,
//       message: "Server error during enrollment",
//       detail: err.message || "Unknown database error",
//     });
//   }
// });
////////
// } catch (err) {
//   console.error("╔═══════════════════════ ENROLL ERROR ══════════════════════╗");
//   console.error("Time:          ", new Date().toISOString());
//   console.error("Error name:    ", err.name || "(no name)");
//   console.error("Error message: ", err.message || "(no message)");
//   console.error("Error code:    ", err.code);

//   if (err.name === "ValidationError" && err.errors) {
//     console.error("Validation failures:");
//     Object.keys(err.errors).forEach(field => {
//       const e = err.errors[field];
//       console.error(`  • ${field.padEnd(20)} → ${e.message}`);
//       console.error(`      received value: ${JSON.stringify(e.value)}`);
//       console.error(`      kind/type:      ${e.kind || "unknown"}`);
//     });
//   } else if (err.code === 11000) {
//     console.error("→ Duplicate key (most likely email already exists)");
//   } else if (err.name === "MongoServerError") {
//     console.error("→ MongoDB server error — check connection / permissions");
//   }

//   console.error("Full error object:", JSON.stringify(err, null, 2));
//   console.error("Stack (first lines):", err.stack?.split("\n").slice(0, 8).join("\n"));
//   console.error("╚══════════════════════════════════════════════════════════╝");

//   res.status(500).json({
//     success: false,
//     message: "Server error during enrollment",
//     errorType: err.name,
//     errorDetail: err.message || "Unknown error",
//     validationErrors: err.errors ? Object.keys(err.errors) : null
//   });
// }

// Bonus: New endpoint for mock payment confirmation (Week 2)
//*** */
// router.post("/confirm-payment", async (req, res) => {
//   try {
//     const { studentId, enrollmentId, transactionId } = req.body;

//     const student = await Student.findOneAndUpdate(
//       { $or: [{ _id: studentId }, { enrollmentId }] },
//       {
//         paymentStatus: "paid",
//         enrollmentStatus: "enrolled",
//         transactionId: transactionId || `MOCK-${Date.now()}`,
//         paidAt: new Date(),
//         // enrollmentId will be auto-generated via pre-save hook if not set
//       },
//       { new: true }
//     );

//     if (!student) {
//       return res.status(404).json({
//         success: false,
//         message: "Student not found",
//       });
//     }

//     res.json({
//       success: true,
//       message: "Payment confirmed (mock)",
//       student: {
//         enrollmentId: student.enrollmentId,
//         paymentStatus: student.paymentStatus,
//         enrollmentStatus: student.enrollmentStatus,
//       },
//     });
//   } catch (err) {
//     console.error("Error confirming payment:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// export default router;
//*** */


// import express from "express";
// import mongoose from "mongoose";

// const router = express.Router();

// /* =========================
//    TEMP STUDENT SCHEMA
//    ========================= */
// const StudentSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   location: String,
//   education: String,
//   branch: String,
//   graduationYear: String,
//   status: String,
//   program: String,
// });

// const Student = mongoose.model("Student", StudentSchema);

// /* =========================
//    ENROLL ROUTE
//    ========================= */
// router.post("/", async (req, res) => {
//   try {
//     console.log("🔥 ENROLL API HIT");
//     console.log("📦 DATA RECEIVED:", req.body);

//     const student = await Student.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Enrollment successful",
//       studentId: student._id,
//     });
//   } catch (err) {
//     console.error("❌ ENROLL ERROR:", err);

//     res.status(500).json({
//       success: false,
//       message: "Server error during enrollment",
//     });
//   }
// });

// /* =========================
//    CONFIRM PAYMENT (MOCK)
//    ========================= */
// router.post("/confirm-payment", async (req, res) => {
//   try {
//     console.log("🔥 CONFIRM PAYMENT API HIT");
//     console.log("📦 DATA RECEIVED:", req.body);

//     const { studentId } = req.body;

//     if (!studentId) {
//       return res.status(400).json({
//         success: false,
//         message: "Student ID missing",
//       });
//     }

//     // Update payment status (mock)
//     const student = await Student.findByIdAndUpdate(
//       studentId,
//       {
//         paymentStatus: "paid",
//         enrollmentStatus: "enrolled",
//         paidAt: new Date(),
//       },
//       { new: true }
//     );

//     if (!student) {
//       return res.status(404).json({
//         success: false,
//         message: "Student not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Payment confirmed successfully",
//       student: {
//         studentId: student._id,
//         paymentStatus: student.paymentStatus,
//         enrollmentStatus: student.enrollmentStatus,
//       },
//     });
//   } catch (err) {
//     console.error("❌ CONFIRM PAYMENT ERROR:", err);

//     res.status(500).json({
//       success: false,
//       message: "Could not confirm payment",
//     });
//   }
// });

// export default router;


// import express from "express";
// import Student from "../models/Student.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   console.log("ENROLL POST RECEIVED", req.body);

//   try {
//     const data = req.body;

//     const student = await Student.create({
//       ...data,
//       tier: "Beginner", // or your logic
//       paymentStatus: "pending",
//       enrollmentStatus: "pending",
//     });

//     console.log("Student created:", student._id);

//     res.status(201).json({
//       success: true,
//       message: "Enrollment successful",
//       student: student.toObject(), // send full student
//     });
//   } catch (err) {
//     console.error("ENROLL ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// router.post("/confirm-payment", async (req, res) => {
//   console.log("CONFIRM-PAYMENT RECEIVED", req.body);

//   try {
//     const { studentId, enrollmentId } = req.body;

//     if (!studentId && !enrollmentId) {
//       return res.status(400).json({ success: false, message: "ID required" });
//     }

//     const student = await Student.findOneAndUpdate(
//       { $or: [{ _id: studentId }, { enrollmentId }] },
//       {
//         paymentStatus: "paid",
//         enrollmentStatus: "enrolled",
//         paidAt: new Date(),
//       },
//       { new: true }
//     );

//     if (!student) {
//       return res.status(404).json({ success: false, message: "Student not found" });
//     }

//     res.json({
//       success: true,
//       message: "Payment confirmed",
//       student: student.toObject(),
//     });
//   } catch (err) {
//     console.error("CONFIRM-PAYMENT ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// export default router;

// import multer from "multer";

// // Multer setup: store uploaded files temporarily on disk
// const upload = multer({ dest: "uploads/" });

// // Route for uploading multiple documents
// router.post("/upload-documents", upload.array("documents", 5), async (req, res) => {
//   try {
//     const { studentId } = req.body;
//     const files = req.files;

//     if (!studentId) {
//       return res.status(400).json({ success: false, message: "Student ID required" });
//     }

//     if (!files || files.length === 0) {
//       return res.status(400).json({ success: false, message: "No files uploaded" });
//     }

//     // Upload each file to Cloudinary
//     const uploadedDocs = [];

//     for (const file of files) {
//       const result = await cloudinary.uploader.upload(file.path, {
//         folder: "algoascend/students",  // organizes files in Cloudinary
//         resource_type: "auto",          // auto-detects PDF/image/etc.
//       });

//       // Delete temp file from disk
//       require("fs").unlinkSync(file.path);

//       uploadedDocs.push({
//         type: "document",                 // you can make this dynamic later
//         url: result.secure_url,
//         originalName: file.originalname,
//         uploadedAt: new Date(),
//         verified: false,
//       });
//     }

//     // Add uploaded documents to student's record
//     const student = await Student.findByIdAndUpdate(
//       studentId,
//       { $push: { documents: { $each: uploadedDocs } } },
//       { new: true }
//     );

//     if (!student) {
//       return res.status(404).json({ success: false, message: "Student not found" });
//     }

//     res.json({
//       success: true,
//       message: "Documents uploaded successfully",
//       documents: student.documents,
//     });
//   } catch (err) {
//     console.error("Upload error:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

import express from "express";
import Student from "../models/Student.js";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary"; 
import fs from "fs/promises";

const router = express.Router();

// Multer setup: temporary storage for uploaded files
const upload = multer({ dest: "uploads/" });

// Main enrollment route
router.post("/", async (req, res) => {
  console.log("ENROLL POST RECEIVED", req.body);

  try {
    const data = req.body;

    // Optional: add tier logic if you want
    let tier = "Beginner";
    if (
      data.education === "Graduate" ||
      data.education === "Post Graduate" ||
      data.status === "working"
    ) {
      tier = "Advanced";
    }

    const student = await Student.create({
      ...data,
      tier,
      paymentStatus: "pending",
      enrollmentStatus: "pending",
    });

    console.log("Student created:", student._id);

    res.status(201).json({
      success: true,
      message: "Enrollment successful",
      student: student.toObject(),
    });
  } catch (err) {
    console.error("ENROLL ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Mock payment confirmation
router.post("/confirm-payment", async (req, res) => {
  console.log("CONFIRM-PAYMENT RECEIVED", req.body);

  try {
    const { studentId, enrollmentId } = req.body;

    if (!studentId && !enrollmentId) {
      return res.status(400).json({ success: false, message: "ID required" });
    }

    const student = await Student.findOneAndUpdate(
      { $or: [{ _id: studentId }, { enrollmentId }] },
      {
        paymentStatus: "paid",
        enrollmentStatus: "enrolled",
        paidAt: new Date(),
      },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.json({
      success: true,
      message: "Payment confirmed",
      student: student.toObject(),
    });
  } catch (err) {
    console.error("CONFIRM-PAYMENT ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Document upload route (this is the one that was crashing)
// router.post("/upload-documents", upload.array("documents", 5), async (req, res) => {
//   try {
//     const { studentId } = req.body;
//     const files = req.files;

//     if (!studentId) {
//       return res.status(400).json({ success: false, message: "Student ID required" });
//     }

//     if (!files || files.length === 0) {
//       return res.status(400).json({ success: false, message: "No files uploaded" });
//     }

//     const uploadedDocs = [];

//     for (const file of files) {
//       // 
//       const result = await cloudinary.uploader.upload(file.path, {
//   folder: "algoascend/students",
//   resource_type: "auto",
//   upload_preset: "student-unsign"  
// });

//       // Delete temporary file
//       require("fs").unlinkSync(file.path);

//       uploadedDocs.push({
//         type: "document",
//         url: result.secure_url,
//         originalName: file.originalname,
//         uploadedAt: new Date(),
//         verified: false,
//       });
//     }

//     const student = await Student.findByIdAndUpdate(
//       studentId,
//       { $push: { documents: { $each: uploadedDocs } } },
//       { new: true }
//     );

//     if (!student) {
//       return res.status(404).json({ success: false, message: "Student not found" });
//     }

//     res.json({
//       success: true,
//       message: "Documents uploaded successfully",
//       documents: student.documents,
//     });
//   } catch (err) {
//     console.error("Upload error:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

router.post("/upload-documents", upload.array("documents", 5), async (req, res) => {
  try {
    const { studentId } = req.body;
    const files = req.files;

    if (!studentId) {
      return res.status(400).json({ success: false, message: "Student ID required" });
    }

    if (!files || files.length === 0) {
      return res.status(400).json({ success: false, message: "No files uploaded" });
    }

    const uploadedDocs = [];

    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "algoascend/students",
        resource_type: "auto",
        upload_preset: "student-unsign"
      });

      // FIXED: use ESM fs.unlink (async, no require)
      await fs.unlink(file.path);

      uploadedDocs.push({
        type: "document",
        url: result.secure_url,
        originalName: file.originalname,
        uploadedAt: new Date(),
        verified: false,
      });
    }

    const student = await Student.findByIdAndUpdate(
      studentId,
      { $push: { documents: { $each: uploadedDocs } } },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.json({
      success: true,
      message: "Documents uploaded successfully",
      documents: student.documents,
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;

// Get all students for admin
router.get("/admin/students", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      students,
    });
  } catch (err) {
    console.error("Admin fetch error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update lead status
router.put("/admin/students/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { leadStatus: status },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.json({
      success: true,
      message: "Status updated",
      student,
    });
  } catch (err) {
    console.error("Status update error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});


// Update verification status of a specific document
// router.put("/admin/students/:studentId/documents/:docId/verify", async (req, res) => {
//   try {
//     const { studentId, docId } = req.params;
//     const { verified } = req.body; // true or false

//     const student = await Student.findById(studentId);
//     if (!student) {
//       return res.status(404).json({ success: false, message: "Student not found" });
//     }

//     const doc = student.documents.id(docId);
//     if (!doc) {
//       return res.status(404).json({ success: false, message: "Document not found" });
//     }

//     doc.verified = verified;
//     await student.save();

//     res.json({
//       success: true,
//       message: `Document ${verified ? "verified" : "rejected"}`,
//       student,
//     });
//   } catch (err) {
//     console.error("Verify document error:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// });
router.put("/admin/students/:studentId/documents/:docId/verify", async (req, res) => {
  try {
    const { studentId, docId } = req.params;
    const { verified } = req.body;

    console.log(`[VERIFY] Request received: studentId=${studentId}, docId=${docId}, verified=${verified}`);

    if (!studentId || !docId || typeof verified !== "boolean") {
      return res.status(400).json({ success: false, message: "Missing or invalid parameters" });
    }

    const student = await Student.findById(studentId);
    if (!student) {
      console.log(`[VERIFY] Student not found: ${studentId}`);
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    console.log(`[VERIFY] Student found, documents count: ${student.documents?.length || 0}`);

    const doc = student.documents?.id(docId);
    if (!doc) {
      console.log(`[VERIFY] Document not found: docId=${docId}`);
      return res.status(404).json({ success: false, message: "Document not found in student record" });
    }

    console.log(`[VERIFY] Document found, old verified: ${doc.verified}`);

    doc.verified = verified;
    await student.save();

    console.log(`[VERIFY] Success - new verified: ${verified}`);

    res.json({
      success: true,
      message: `Document ${verified ? "verified" : "rejected"}`,
      student,
    });
  } catch (err) {
    console.error("[VERIFY ERROR]", err.message, err.stack);
    res.status(500).json({ success: false, message: "Server error during verification: " + err.message });
  }
});