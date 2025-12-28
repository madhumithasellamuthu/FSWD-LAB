import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Simple pages
const Home = () => <h2>Welcome back, Student!</h2>;
const Courses = () => <h2>Your Courses</h2>;
const Attendance = () => <h2>Attendance Tracker</h2>;
const Profile = () => <h2>Student Profile</h2>;
const Settings = () => <h2>Settings</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>🎓 Student Dashboard</h1>
        
        {/* Navigation */}
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/courses" style={{ marginRight: "10px" }}>Courses</Link>
          <Link to="/attendance" style={{ marginRight: "10px" }}>Attendance</Link>
          <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
