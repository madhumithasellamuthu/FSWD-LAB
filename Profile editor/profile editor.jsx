import { useState } from "react";

export default function ProfileEditor() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.age || form.age < 13 || form.age > 120) {
      newErrors.age = "Age must be between 13 and 120";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Profile updated successfully!");
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Edit Profile</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        <button type="submit">Save</button>

        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
}
