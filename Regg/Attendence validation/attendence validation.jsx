import React, { useState } from "react";

const AttendanceTracker = () => {
  // Initial student list
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", present: false },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: false },
    { id: 4, name: "Diana", present: false },
  ]);

  // Toggle attendance
  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  // Count summary
  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>📋 Attendance Tracker</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li
            key={student.id}
            style={{
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: student.present ? "#d4edda" : "#f8d7da",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <span>{student.name}</span>
            <button
              onClick={() => toggleAttendance(student.id)}
              style={{
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                background: student.present ? "#28a745" : "#dc3545",
                color: "white",
              }}
            >
              {student.present ? "Present ✅" : "Absent ❌"}
            </button>
          </li>
        ))}
      </ul>

      <h3>Summary</h3>
      <p>
        ✅ Present: {presentCount} | ❌ Absent: {absentCount}
      </p>
    </div>
  );
};

export default AttendanceTracker;
