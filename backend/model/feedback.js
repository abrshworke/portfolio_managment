const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String, 
      required: true,
    },
    message: {
      type: String, 
      required : true,
    },
    
  },
  {
    timestamps: true, 
  }
);

const contactmodel = mongoose.model("contact", contactSchema);
module.exports = contactmodel;



