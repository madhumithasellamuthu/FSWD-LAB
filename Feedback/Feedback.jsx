import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    comments: "",
  });

  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.rating || !formData.comments) {
      alert("Please fill all fields");
      return;
    }

    setFeedbackList([...feedbackList, formData]);

    // Reset form
    setFormData({
      name: "",
      rating: "",
      comments: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2>🧾 Feedback Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Rate Us</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>

        <textarea
          name="comments"
          placeholder="Your Comments"
          value={formData.comments}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>

      {feedbackList.length > 0 && (
        <div style={styles.feedbackSection}>
          <h3>📌 Submitted Feedback</h3>

          {feedbackList.map((item, index) => (
            <div key={index} style={styles.card}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Rating:</strong> {item.rating}</p>
              <p><strong>Comments:</strong> {item.comments}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  feedbackSection: {
    marginTop: "20px",
  },
  card: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};

export default FeedbackForm;
