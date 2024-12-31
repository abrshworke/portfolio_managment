
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/feedback.css"
import AdminHeaderpage from "../components/adminheader";
import Footer from "../components/footer";

const FetchFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/feedbacks/getfeedback");
      setFeedbacks(response.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching feedbacks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (

    <div>

      <AdminHeaderpage/>
   
   <section className="bo">
         <div className="conta">
      <h2>User Feedback</h2>
      {loading && <p>Loading feedback...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !feedbacks.length && <p>No feedback available.</p>}
      <ul className="feedback-list">
        {feedbacks.map((feedback) => (
          <li key={feedback._id}>
            <h3>Name: {feedback.name}</h3>
            <p>Email: {feedback.email}</p>
            <p>To Project: {feedback.subject}</p>
            <p>My Comment: {feedback.message}</p>
          </li>
        ))}
      </ul>
    </div>
    </section>
     <Footer/>
    </div>

    

    
  );
};

export default FetchFeedback;
