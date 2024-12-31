import React from 'react';
import "../css/headeres.css";
import { useNavigate } from 'react-router-dom'; 
import imgd from "../image/e59a109c0a4e54f3e8622058936a1ce1.jpg";

function Headerpage() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/signup'); 
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img className="logo-img" src={imgd} alt="Logo" />
        <span className="logo-title">AAU Portfolio System</span>
      </div>

      <nav className="navbar-menu">
        <ul className="menu-list">
          <li><a href="/" className="menu-link">Home</a></li>
          <li><a href="/project" className="menu-link">Projects</a></li>
          <li><a href="/contact" className="menu-link">Contact</a></li>
          <li><a href="/about" className="menu-link">About Us</a></li>
        </ul>
      </nav>

      <div className="navbar-actions">
        <button onClick={handleCreateAccount} className="btn-create">Admin Account</button>
      </div>
    </header>
  );
}

export default Headerpage;
