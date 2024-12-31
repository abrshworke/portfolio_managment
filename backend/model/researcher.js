
const mongoose = require("mongoose");

const researcherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  }, 
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
});


const researchermodel = mongoose.model("researcher", researcherSchema);
module.exports = researchermodel;
