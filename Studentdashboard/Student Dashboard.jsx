import { useState } from "react";

export default function StudentDashboard() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const students = [
    { id: 1, name: "Alice Johnson", age: 20, course: "Math" },
    { id: 2, name: "Bob Smith", age: 22, course: "Physics" },
    { id: 3, name: "Charlie Lee", age: 19, course: "Chemistry" }
  ];

  function renderPage() {
    switch (currentPage) {
      case "Dashboard":
        return <h2>Welcome to the Student Management Dashboard</h2>;
      case "Students":
        return (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.age}</td>
                  <td>{s.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "Reports":
        return <p>Reports coming soon...</p>;
      default:
        return null;
    }
  }

  return (
    <div style={styles.container}>
      {/* Sidebar Navigation */}
      <nav style={styles.sidebar}>
        <h3>Dashboard</h3>
        {["Dashboard", "Students", "Reports"].map((page) => (
          <div
            key={page}
            style={{
              ...styles.navItem,
              background: currentPage === page ? "#007bff" : "transparent",
              color: currentPage === page ? "#fff" : "#000"
            }}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
      </nav>

      {/* Main Content */}
      <main style={styles.main}>{renderPage()}</main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  },
  sidebar: {
    width: "200px",
    background: "#f4f4f4",
    padding: "20px",
    boxSizing: "border-box"
  },
  navItem: {
    padding: "10px",
    marginBottom: "8px",
    cursor: "pointer",
    borderRadius: "4px"
  },
  main: {
    flex: 1,
    padding: "20px",
    background: "#fff"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  th: {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left"
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px"
  }
};
