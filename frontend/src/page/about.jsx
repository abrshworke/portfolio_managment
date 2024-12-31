import React from "react";
import "../css/about.css";

import Footer from "../components/footer";
import Headerpage from "../components/headerpage";

const AboutUs = () => {
  return (
    <div>
   
   <Headerpage/>

   <section className="about-us-section">
      <div className="about-us-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to AAUPMS</h1>
          <p className="hero-subtitle">
            Empowering students, faculty, and administrators with a centralized platform for managing portfolios and academic excellence.
          </p>
        </div>
      </div>

      <div className="about-us-content">
        <h2 className="content-title">Who We Are</h2>
        <p className="content-text">
          The <strong>Addis Ababa University Portfolio Management System (AAUPMS)</strong> is a cutting-edge platform designed to enhance productivity, collaboration, and accessibility within the university ecosystem. Whether you’re a student managing your academic journey, a researcher documenting breakthroughs, or an administrator optimizing processes, AAUPMS is here to simplify it all.
        </p>
        
        <h2 className="content-title">What We Do</h2>
        <ul className="content-list">
          <li><strong>Centralized Management:</strong> Store and organize all your academic and research data in one secure location.</li>
          <li><strong>Enhanced Collaboration:</strong> Enable teamwork with shared workspaces, progress tracking, and communication tools.</li>
          <li><strong>Insights and Analytics:</strong> Gain insights into trends, performance metrics, and data-driven decision-making.</li>
          <li><strong>Accessibility:</strong> Easily access resources, updates, and feedback from anywhere.</li>
        </ul>
        
        <h2 className="content-title">Our Vision</h2>
        <p className="content-text">
          To create a seamless and innovative platform that fosters academic growth, research excellence, and institutional success. Our goal is to empower Addis Ababa University’s community to achieve more with fewer barriers.
        </p>
        
        <h2 className="content-title">Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Portfolio Management</h3>
            <p>Easily track, organize, and update academic and project portfolios.</p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Collaboration</h3>
            <p>Work with peers and supervisors in real-time using advanced tools.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Cloud Storage</h3>
            <p>Keep all your data safe and accessible anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <h3>Detailed Reporting</h3>
            <p>Generate comprehensive reports for academic and administrative use.</p>
          </div>
        </div>

        <div className="about-us-cta">
          <button className="cta-button">Get Started</button>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default AboutUs;