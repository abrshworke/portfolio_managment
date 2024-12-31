const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());




const  projectroute= require("./router/project_route"); 
app.use("/api/projects" , projectroute); 
 


const researcherroute = require("./router/research_route");
app.use("/api/researchers" , researcherroute)


const feedbackroute = require("./router/feedback_route");
app.use("/api/feedbacks" , feedbackroute)





mongoose.connect(
    'mongodb+srv://abreham:abreham21@spm.17fyz.mongodb.net/'
  )
    .then(() => { 
      console.log("Connected to MongoDB successfully!");
    })
    .catch(err => {
      console.error("Error connecting to MongoDB:", err);
    });
  
  



    
app.listen(7000, () => {
    console.log("Server is running on port 7000");
  });