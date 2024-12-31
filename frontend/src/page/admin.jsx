import React from 'react';
import Footer from '../components/footer';
import AdminHeader from '../components/adminheader';
import "../css/admin.css";

function Admin() {
  return (
    <section>
      <AdminHeader />
      
      <div className="admin-section">
        <div className="admin-overlay">
          <h1>Welcome to the Researcher Page</h1>
          <p>Your one-stop destination for all research-related resources and tools.</p>
          
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Admin;
