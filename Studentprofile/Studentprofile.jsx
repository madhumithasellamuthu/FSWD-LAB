import React, { useState } from "react";

/* Child Component using Props */
function StudentDetails(props) {
  return (
    <div>
      <h2>Student Profile</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Roll No:</b> {props.roll}</p>
      <p><b>Department:</b> {props.department}</p>
    </div>
  );
}

/* Component using State */
function Attendance() {
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);

  return (
    <div>
      <h2>Attendance Tracker</h2>
      <p>Present Days: {present}</p>
      <p>Absent Days: {absent}</p>

      <button onClick={() => setPresent(present + 1)}>
        Mark Present
      </button>

      <button onClick={() => setAbsent(absent + 1)}>
        Mark Absent
      </button>
    </div>
  );
}

/* Conditional Rendering using State */
function ResultStatus() {
  const [isPassed, setIsPassed] = useState(true);

  return (
    <div>
      <h2>Result Status</h2>
      <p>{isPassed ? "Status: PASS" : "Status: FAIL"}</p>

      <button onClick={() => setIsPassed(!isPassed)}>
        Toggle Result
      </button>
    </div>
  );
}

/* Main Parent Component */
function App() {
  return (
    <div>
      <h1>React.js Concepts Demonstration</h1>

      {/* Passing Props */}
      <StudentDetails
        name="Madhu"
        roll="23bcs036"
        department="Computer Science"
      />

      <hr />

      {/* Using State */}
      <Attendance />

      <hr />

      {/* Conditional Rendering */}
      <ResultStatus />
    </div>
  );
}

export default App;
