import { useState } from "react";

export default function BlogPost() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  function handleCommentSubmit(e) {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const newComment = {
      id: Date.now(),
      text: commentInput.trim(),
      timestamp: new Date().toLocaleTimeString()
    };

    setComments([newComment, ...comments]);
    setCommentInput("");
  }

  return (
    <div style={styles.container}>
      {/* Blog Content */}
      <div style={styles.blog}>
        <h1>Responsive Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisl eget consectetur sagittis, nisl nunc
          consequat nisi, euismod aliquam nisl nunc eu lectus.
        </p>
      </div>

      {/* Comments Section */}
      <div style={styles.comments}>
        <h2>Comments ({comments.length})</h2>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} style={styles.form}>
          <textarea
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Post Comment</button>
        </form>

        {/* Comments List */}
        <div>
          {comments.length === 0 && <p>No comments yet.</p>}
          {comments.map((c) => (
            <div key={c.id} style={styles.comment}>
              <p>{c.text}</p>
              <span style={styles.timestamp}>{c.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    gap: "20px"
  },
  blog: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "6px"
  },
  comments: {
    background: "#fff",
    padding: "20px",
    borderRadius: "6px",
    border: "1px solid #ddd"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "16px",
    gap: "8px"
  },
  textarea: {
    width: "100%",
    minHeight: "60px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    width: "120px",
    padding: "8px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  comment: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between"
  },
  timestamp: {
    fontSize: "12px",
    color: "#999"
  }
};
