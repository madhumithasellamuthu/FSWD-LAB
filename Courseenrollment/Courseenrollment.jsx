import React, { useState } from "react";

const CourseEnrollment = () => {
  const [studentName, setStudentName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    "Web Development",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cyber Security",
  ];

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!studentName || !selectedCourse) {
      alert("Please enter student name and select a course");
      return;
    }

    const newEnrollment = {
      name: studentName,
      course: selectedCourse,
    };

    setEnrolledCourses([...enrolledCourses, newEnrollment]);

    // Reset form
    setStudentName("");
    setSelectedCourse("");
  };

  return (
    <div style={styles.container}>
      <h2>📚 Course Enrollment</h2>

      <form onSubmit={handleEnroll} style={styles.form}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={styles.input}
        />

        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        <button type="submit" style={styles.button}>
          Enroll
        </button>
      </form>

      <h3>🧑‍🎓 Enrolled Students</h3>

      {enrolledCourses.length === 0 ? (
        <p>No enrollments yet</p>
      ) : (
        <ul style={styles.list}>
          {enrolledCourses.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item.name} → <strong>{item.course}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
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
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  list: {
    paddingLeft: "20px",
  },
  listItem: {
    marginBottom: "8px",
  },
};

export default CourseEnrollment;
