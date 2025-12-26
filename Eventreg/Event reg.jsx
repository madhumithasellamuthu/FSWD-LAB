import React, { useState } from "react";

function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");

  const registerEvent = () => {
    if (!name || !email || !event) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const confirmation = window.confirm(
      `Please confirm your registration:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Event: ${event}`
    );

    if (confirmation) {
      alert("✅ Registration Successful!\nThank you for registering.");
      // Optionally clear form
      setName("");
      setEmail("");
      setEvent("");
    } else {
      alert("❌ Registration Cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🎉 Event Registration</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <select
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        style={styles.input}
      >
        <option value="">Select Event</option>
        <option value="Tech Conference">Tech Conference</option>
        <option value="Workshop">Workshop</option>
        <option value="Cultural Fest">Cultural Fest</option>
      </select>

      <button onClick={registerEvent} style={styles.button}>
        Register
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "80px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "10px"
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default EventRegistration;
