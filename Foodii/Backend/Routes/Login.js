const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    // Compare plain text password
    if (user.password !== password) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
});

module.exports = router;
