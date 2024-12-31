
const express = require("express");
const router = express.Router();
const project = require("../model/project");

// GET all projects
router.get("/getproject", async (req, res) => {
  try {
    const projects = await project.find({});
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    return res.status(500).json({
      message: "Error fetching projects",
      error: error.message,
    });
  }
});

// ADD a new project
router.post("/addproject", async (req, res) => {
  const { title, name, imageurl, progress, description } = req.body;

  if (!name || !title || !imageurl || !description || !progress) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newProject = await project.create({
      name,
      title,
      imageurl,
      progress,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      project: newProject, // Fix: Use consistent naming
    });
  } catch (error) {
    console.error("Error adding project:", error.message);
    res.status(500).json({
      success: false,
      message: "Error adding project",
      error: error.message,
    });
  }
});



router.delete("/deleteproject/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProject = await project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully", deletedProject });
  } catch (error) {
    console.error("Error deleting project:", error.message);
    res.status(500).json({
      message: "Error deleting project",
      error: error.message,
    });
  }
});


module.exports = router;
