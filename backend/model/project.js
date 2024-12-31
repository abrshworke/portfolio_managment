




const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    name: {
      type: String,
      required: true,
    },
    imageurl: {
      type: [String], 
      required: true,
    },
    progress: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const projectmodel = mongoose.model("project", projectSchema);
module.exports = projectmodel;

