import React, { useState } from "react";
import axios from "axios";
import "../css/addproject.css";
import Footer from "../components/footer";
import AdminHeaderpage from "../components/adminheader";

const AddProject = () => {

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    imageurl: [],
    progress: "",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "imageurl" ? value.split(",") : value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/api/projects/addproject", formData);
      setMessage(response.data.message);
      setError(""); 
      setFormData({
        title: "",
        name: "",
        imageurl: [],
        progress: "",
        description: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Error adding project");
      setMessage(""); 
    }
  };

  return (

    <div>

<AdminHeaderpage/>

<section className="coca">

<div className="addproject">
  <h2>Add Project</h2>
  {message && <p className="success">{message}</p>}
  {error && <p className="error">{error}</p>}
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={formData.title}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="name"
      placeholder="Creator Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="imageurl"
      placeholder="Image URLs (comma-separated)"
      value={formData.imageurl}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="progress"
      placeholder="Progress"
      value={formData.progress}
      onChange={handleChange}
      required
    />
    <textarea
      name="description"
      placeholder="Description"
      value={formData.description}
      onChange={handleChange}
      required
    />
    <button className="probtn" type="submit">Add Project</button>
  </form>
</div>

</section>

<Footer/>

    </div>

    


    
  );
};

export default AddProject;



