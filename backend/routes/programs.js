import express from "express";
import Program from "../models/Program.js";

const router = express.Router();

// GET all programs (public — for frontend catalog)
// router.get("/", async (req, res) => {
//   try {
//     const programs = await Program.find();
//     res.status(200).json(programs);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.get("/", async (req, res) => {
  try {
    console.log("Programs route hit");
    console.log("Program model:", Program);          // ← add this
    if (!Program) throw new Error("Program model not imported");

    const programs = await Program.find();
    console.log(`Found ${programs.length} programs`);
    res.status(200).json(programs);
  } catch (err) {
    console.error("Programs route ERROR:", err.message);
    console.error(err.stack);                        // ← full trace
    res.status(500).json({ message: "Server error", details: err.message });
  }
});

// CREATE new program (admin only — we'll protect later)
router.post("/", async (req, res) => {
  try {
    const newProgram = new Program(req.body);
    await newProgram.save();
    res.status(201).json(newProgram);
  } catch (err) {
    res.status(500).json({ message: "Failed to create program", error: err.message });
  }
});

// UPDATE program (admin)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update" });
  }
});

// DELETE program (admin)
router.delete("/:id", async (req, res) => {
  try {
    await Program.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete" });
  }
});

export default router;