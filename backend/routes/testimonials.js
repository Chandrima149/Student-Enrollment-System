import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

// GET all testimonials (public - for frontend)
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// TEMPORARY: Seed initial testimonials - call once then remove
router.post("/seed", async (req, res) => {
  try {
    const seedData = [
      {
        name: "Vikram Singh",
        role: "Frontend Developer",
        company: "Flipkart",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        content: "The Full-Stack program gave me exactly the skills I needed. Got placed at Flipkart with a 12 LPA package!",
        rating: 5,
        program: "Full-Stack Development",
      },
      {
        name: "Sneha Saha",
        role: "Data Scientist",
        company: "Swiggy",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
        content: "Best investment in my career. The AI/ML curriculum is on par with top universities. Highly recommend!",
        rating: 5,
        program: "AI/ML Engineering",
      },
    ];

    await Testimonial.deleteMany({}); // Clear old ones (optional)
    const inserted = await Testimonial.insertMany(seedData);

    res.status(201).json({
      message: "Testimonials seeded successfully!",
      count: inserted.length,
    });
  } catch (err) {
    console.error("Seeding error:", err);
    res.status(500).json({ message: "Seeding failed" });
  }
});

export default router;