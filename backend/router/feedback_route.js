
const express = require("express");
const router = express.Router();
const feedback = require("../model/feedback");

router.get("/getfeedback", async (req, res) => {
  try {
    const feedbacks = await feedback.find({});
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error.message);
    return res.status(500).json({
      message: "Error fetching feedback",
      error: error.message,
    });
  }
});




router.post("/addfeedback", async (req, res) => {
  const {name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newfeedback = await feedback.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      feedback: newfeedback, 
    });
  } catch (error) {
    console.error("Error adding feedback:", error.message);
    res.status(500).json({
      success: false,
      message: "Error adding feedback",
      error: error.message,
    });
  }
});

module.exports = router;
