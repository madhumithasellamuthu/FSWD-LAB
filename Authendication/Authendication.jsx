import { useState } from "react";

export default function AuthSimulator() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Fake user data
  const fakeUser = {
    username: "student",
    password: "12345"
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setIsError(true);
      setMessage("All fields are required");
      return;
    }

    if (
      username === fakeUser.username &&
      password === fakeUser.password
    ) {
      setIsError(false);
      setMessage("Login successful! Welcome 🎉");
    } else {
      setIsError(true);
      setMessage("Invalid username or password");
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>

        {message && (
          <div
            style={{
              ...styles.alert,
              background: isError ? "#ffdddd" : "#ddffdd",
              color: isError ? "#a00" : "#060"
            }}
          >
            {message}
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

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
    width: "320px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
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
