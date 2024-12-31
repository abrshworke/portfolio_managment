import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/project.css";
import Headerpage from "../components/headerpage";
import Footer from "../components/footer";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/projects/getproject");
      setProjects(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (

    <div>
    <Headerpage/>
    <section className="projects-section">
      
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <h3 className="project-name">{project.title}</h3>
              <div className="project-image-gallery">
                {project.imageurl.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Project ${project.title}`}
                    className="project-image"
                  />
                ))}
              </div>
              <div className="project-content">
                
                <p className="project-progress">Progress: <strong className="proper">{project.progress}</strong></p>
                <p className="project-creator"> Published by : <strong className="nan"> {project.name}</strong></p>
                <p className="project-description">{project.description}</p>
                <button className="btn view-details">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
    <Footer/>
    </div>


    
  );
};

export default Projects;










