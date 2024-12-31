
const express = require("express");
const router = express.Router();
const researcher = require("../model/researcher");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/getresearcher", async (req, res) => {
  try { 
    const researchers = await researcher.find().select("-password");
    res.send(researchers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});





router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, password) are required",
    });
  }

  try {
    const existingUser = await researcher.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newResearcher = await researcher.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: "Researcher created successfully!",
      researcher: {
        name: newResearcher.name,
        email: newResearcher.email,
      },
    });
  } catch (err) {
    console.error("Error creating researcher:", err);
    res.status(500).json({
      success: false,
      message: "Error creating researcher",
      error: err.message,
    });
  }
});






router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Both email and password are required",
    });
  }

  try {
    const user = await researcher.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: err.message,
    });
  }
});

module.exports = router;
