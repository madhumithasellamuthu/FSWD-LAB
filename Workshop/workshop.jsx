import { useState } from "react";

export default function WorkshopRegistration() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    topic: "",
    level: "Beginner",
    agree: false
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.fullName || !data.email || !data.topic) {
      alert("Please fill all required fields");
      return;
    }
    alert("Registration successful!");
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      
      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        <h2>Workshop Registration</h2>

        <input
          name="fullName"
          placeholder="Full Name *"
          value={data.fullName}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email *"
          value={data.email}
          onChange={handleChange}
        />

        <select name="topic" value={data.topic} onChange={handleChange}>
          <option value="">Select Workshop *</option>
          <option>React Essentials</option>
          <option>Web Accessibility</option>
          <option>UI/UX Basics</option>
        </select>

        <select name="level" value={data.level} onChange={handleChange}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="agree"
            checked={data.agree}
            onChange={handleChange}
          />
          I agree to the terms
        </label>

        <button type="submit">Register</button>
      </form>

      {/* Live Preview */}
      <div style={{ padding: 20, background: "#f3f3f3" }}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {data.fullName || "—"}</p>
        <p><strong>Email:</strong> {data.email || "—"}</p>
        <p><strong>Workshop:</strong> {data.topic || "—"}</p>
        <p><strong>Level:</strong> {data.level}</p>
        <p>
          <strong>Agreed:</strong> {data.agree ? "Yes" : "No"}
        </p>
      </div>

    </div>
  );
}
