import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!username || !role) {
      alert("Please enter username and select a role");
      return;
    }

    // Role-based redirect
    if (role === "admin") {
      window.location.href = "/admin-dashboard";
    } else if (role === "instructor") {
      window.location.href = "/instructor-dashboard";
    } else if (role === "student") {
      window.location.href = "/student-dashboard";
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>
        </select>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "80px"
  },
  form: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  input: {
    width: "100%",
    marginBottom: "12px",
    padding: "8px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#4CAF50",
    color: "#fff",
    border: "none"
  }
};
