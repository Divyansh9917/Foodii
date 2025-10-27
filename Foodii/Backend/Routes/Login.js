const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret="EndToEndEncrypted$"

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

    const pwdCompare=await bcrypt.compare(password,user.password)
    if (!pwdCompare) {
      return res.json({ success: false, message: "Invalid email or password" });
    }
    const data={
      user:{
        id:user.id
      }
    }
    const authToken=jwt.sign(data,jwtSecret)

    res.json({ success: true,authToken:authToken});
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
});

module.exports = router;
