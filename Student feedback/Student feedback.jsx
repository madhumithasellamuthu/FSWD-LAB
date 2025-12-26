import { useState } from "react";

export default function StudentFeedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      setIsError(true);
      setMessage("Please provide a rating and a comment.");
      return;
    }

    setIsError(false);
    setMessage("Thank you for your feedback!");
    setRating(0);
    setComment("");
  }

  return (
    <div style={styles.container}>
      <h2>Student Feedback</h2>

      {message && (
        <div
          style={{
            ...styles.alert,
            background: isError ? "#ffe5e5" : "#e5ffe5",
            color: isError ? "#a00" : "#060"
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Rating */}
        <div style={styles.rating}>
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                ...styles.star,
                color: star <= rating ? "#ffc107" : "#ccc"
              }}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Comment */}
        <textarea
          placeholder="Write your feedback here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  rating: {
    marginBottom: "12px"
  },
  star: {
    fontSize: "24px",
    cursor: "pointer",
    marginRight: "5px"
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "8px",
    marginBottom: "12px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  alert: {
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "4px"
  }
};
