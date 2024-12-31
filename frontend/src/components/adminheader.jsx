import React from 'react';
import "../css/headeres.css";
import { useNavigate } from 'react-router-dom'; 
import imgd from "../image/e59a109c0a4e54f3e8622058936a1ce1.jpg";

function AdminHeaderpage() {
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
          <li><a href="/addproject" className="menu-link">Add_project</a></li>
          <li><a href="/fetchproject" className="menu-link">Show_Projects</a></li>
          <li><a href="/fetchfeedback" className="menu-link">View_Comment</a></li>
          
        </ul>
      </nav>

      <div className="navbar-actions">
        <button onClick={handleCreateAccount} className="btn-logout">Logout</button>
      </div>
    </header>
  );
}

export default AdminHeaderpage;
