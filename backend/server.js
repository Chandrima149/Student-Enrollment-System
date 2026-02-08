// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error(err));

// app.use("/api/enroll", require("./routes/enroll"));

// app.listen(process.env.PORT, () =>
//   console.log(`Server running on port ${process.env.PORT}`)
// );

// server.js
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON requests

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Mongoose Schema & Model
// const enrollmentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   location: { type: String, required: true },
//   education: { type: String, required: true },
//   branch: { type: String, required: true },
//   graduationYear: { type: String, required: true },
//   status: { type: String, required: true },
//   program: { type: String, required: true },
// });

// const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

// // Routes
// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });

// // 
// app.post("/api/enroll", async (req, res) => {
//   try {
//     console.log("Received data:", req.body); // <-- add this to see what frontend sends

//     const newEnrollment = new Enrollment(req.body);
//     await newEnrollment.save();

//     res.status(201).json({ message: "Enrollment successful!" });
//   } catch (err) {
//     console.error("Error saving enrollment:", err); // <-- add this to see any MongoDB error
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import enrollRouter from "./routes/enroll.js";   // ← Add this import

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Routes
// app.use("/api/enroll", enrollRouter);   // ← Use the imported router

// // Optional: health check
// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import enrollRouter from "./routes/enroll.js";
// import programsRouter from "./routes/programs.js";  // ← NEW
// import testimonialsRouter from "./routes/testimonials.js";
// import successStoriesRouter from "./routes/successStories.js";


// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Routes
// app.use("/api/enroll", enrollRouter);
// app.use("/api/programs", programsRouter);  // ← NEW


// // ...

// app.use("/api/testimonials", testimonialsRouter);

// // ...

// app.use("/api/success-stories", successStoriesRouter);

// // Optional: health check
// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import enrollRouter from "./routes/enroll.js";
import programsRouter from "./routes/programs.js";
import testimonialsRouter from "./routes/testimonials.js";
import successStoriesRouter from "./routes/successStories.js";

dotenv.config();

const app = express();

// Middleware
// app.use(cors({
//   origin: "http://localhost:5173", // ← your Vite frontend port (change if different)
//   credentials: true,
// }));
app.use(cors({
  origin: "http://localhost:8080",  // ← YOUR ACTUAL FRONTEND PORT
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
app.use(express.json());

// Log every incoming request (very helpful for debugging)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => {
    console.error("MongoDB connection FAILED:", err.message);
    process.exit(1); // Exit if DB fails — better than silent failure
  });

// Routes
app.use("/api/enroll", enrollRouter);
app.use("/api/programs", programsRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/success-stories", successStoriesRouter);

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler (catches any unhandled errors)
app.use((err, req, res, next) => {
  console.error("GLOBAL SERVER ERROR:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});