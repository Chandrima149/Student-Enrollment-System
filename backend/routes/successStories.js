import express from "express";
import SuccessStory from "../models/SuccessStory.js";

const router = express.Router();

// GET all success stories (for home page)
router.get("/", async (req, res) => {
  try {
    const stories = await SuccessStory.find().sort({ createdAt: -1 }).limit(6);
    res.json(stories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST - Create a new success story (for seeding and future admin)
router.post("/", async (req, res) => {
  try {
    const newStory = new SuccessStory(req.body);
    await newStory.save();
    res.status(201).json(newStory);
  } catch (err) {
    console.error("Error creating success story:", err);
    res.status(500).json({ message: "Failed to create" });
  }
});

export default router;