const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

// POST /api/signup
router.post(
  "/signup",
  [
    check('email', 'Email length should be 10 to 30 characters')
      .isEmail()
      .isLength({ min: 10, max: 30 }),
    check('name', 'Name length should be 5 to 20 characters')
      .isLength({ min: 5, max: 20 }),
    check('password', 'Password length should be 8 to 10 characters')
      .isLength({ min: 8, max: 10 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ success: false, errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;

      // Check duplicate email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ success: false, message: "Email already registered" });
      }

      // Save user without hashing
      await User.create({ name, email, password });

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
