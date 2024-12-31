

import React from 'react';

import Footer from '../components/footer';
import "../css/home.css";
import Headerpage from '../components/headerpage';

function Home() {
  return (


    <div className='bbb'>

<section className="home-section">
      <Headerpage />

      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Our System</h1>
          <p className="hero-text">
          Welcome to Addis Ababa University's Portfolio Management System – designed to streamline your academic and research portfolios.
          Easily manage your projects, track progress, and collaborate effectively. Empowering excellence for a brighter future!
          </p>
          
        </div>
      </div>

      
      <div className="description-section">
  <h2 className="description-title">Desscription About Our Platform</h2>
  <div className="description-content">
    <p className="description-text">
      🌟 The <strong>Addis Ababa University Portfolio Management System (AAUPMS)</strong> is a comprehensive solution designed to streamline portfolio management for students, faculty, and administrators. It serves as a centralized platform to manage academic projects, research portfolios, and institutional records efficiently.
    </p>
    <p className="description-text">
      📊 With its user-friendly interface and robust functionalities, AAUPMS empowers users to:
      <ul className="description-list">
        <li><strong>Organize</strong> academic projects and research materials with ease.</li>
        <li><strong>Collaborate</strong> on group projects using shared workspaces and communication tools.</li>
        <li><strong>Track</strong> progress on deliverables through automated reminders and status updates.</li>
        <li><strong>Generate</strong> detailed reports for administrative or academic purposes.</li>
        <li><strong>Analyze</strong> trends and insights from institutional data for informed decision-making.</li>
      </ul>
    </p>
    <p className="description-text">
      💡 Our system is tailored to meet the unique needs of Addis Ababa University's diverse community. Whether you're a student submitting a capstone project, a researcher compiling findings, or an administrator overseeing departmental tasks, AAUPMS has you covered.
    </p>
    <p className="description-text">
      🌍 By digitizing and centralizing processes, AAUPMS contributes to sustainable development by reducing paper use and improving accessibility for all stakeholders.
    </p>
    
  </div>
</div>



      <Footer />
    </section>


    </div>


    
  );
}

export default Home;
