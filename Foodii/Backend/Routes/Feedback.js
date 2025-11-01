const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");


router.post("/feedback", async (req, res) => {
  try {
    const { email, feedback } = req.body;

    if (!email || !feedback) {
      return res.status(400).json({ message: "Email and feedback required." });
    }

    const newFeedback = new Feedback({ email, feedback });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ message: "Server error while saving feedback." });
  }
});

module.exports = router;
