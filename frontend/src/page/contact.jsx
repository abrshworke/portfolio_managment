import React, { useState } from "react";
import axios from "axios";
import "../css/contact.css";

import Footer from "../components/footer";
import Headerpage from "../components/headerpage";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7000/api/feedbacks/addfeedback",
        formData
      );
      setMessage(response.data.message || "Your feedback has been submitted!");
      setError(""); 
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Error adding feedback.");
      setMessage(""); 
    }
  };

  return (

    <div>

    <Headerpage/>

<section className="feedback">

<div className="contact-us-container">
   <h1 className="contact-us-title">Contact Us</h1>
   <p className="contact-us-text">
     We value your feedback and are here to assist you with any questions or concerns.
     Please feel free to reach out to us using the contact form below or through
     the provided contact details. Our dedicated support team is committed to
     responding to your inquiries promptly and effectively.
   </p>
   <p className="contact-us-text">
     Whether you need technical support, have suggestions for improvements, or
     simply want to learn more about the Addis Ababa University Portfolio Management
     System, we are here to help. Your input is invaluable in helping us create
     the best possible experience for all users.
   </p>
   {message && <p className="success-message">{message}</p>}
   {error && <p className="error-message">{error}</p>}
   <form className="contact-form" onSubmit={handleSubmit}>
     <input
       name="name"
       value={formData.name}
       type="text"
       className="contact-input"
       placeholder="Your Name"
       onChange={handleChange}
       required
     />
     <input
       name="email"
       value={formData.email}
       type="email"
       className="contact-input"
       placeholder="Your Email"
       onChange={handleChange}
       required
     />
     <input
       name="subject"
       value={formData.subject}
       type="text"
       className="contact-input"
       placeholder="Subject"
       onChange={handleChange}
       required
     />
     <textarea
       name="message"
       value={formData.message}
       className="contact-textarea"
       placeholder="Your Message"
       rows="5"
       onChange={handleChange}
       required
     ></textarea>
     <button type="submit" className="contact-button">
       Send Message
     </button>
   </form>
   <div className="contact-details">
     <h2 className="contact-details-title">Get in Touch</h2>
     <p className="contact-details-item">
       <strong>Email:</strong> support@aauportfolio.edu.et
     </p>
     <p className="contact-details-item">
       <strong>Phone:</strong> +251 11 123 4567
     </p>
     <p className="contact-details-item">
       <strong>Address:</strong> Addis Ababa University, Main Campus,
       King George VI St, Addis Ababa, Ethiopia
     </p>
   </div>
 </div>


 </section>

 <Footer/>

    </div>
    
    

    
  );
};

export default ContactUs;
