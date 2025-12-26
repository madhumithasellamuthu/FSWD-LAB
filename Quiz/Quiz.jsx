import QuizApp from "./components/QuizApp";
import React, { useState } from "react";

const QuizApp = () => {
  const questions = [
    { id: 1, question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { id: 2, question: "Capital of France?", options: ["Paris", "Rome", "Berlin"], answer: "Paris" },
    { id: 3, question: "React is a ___ library?", options: ["UI", "Database", "Server"], answer: "UI" }
  ];

  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
    setCurrentQ(currentQ + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Mini Quiz App</h2>
      {currentQ < questions.length ? (
        <div>
          <h3>{questions[currentQ].question}</h3>
          {questions[currentQ].options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              {opt}
            </button>
          ))}
          <p>Current Score: {score}</p>
        </div>
      ) : (
        <h3>Final Score: {score}/{questions.length}</h3>
      )}
    </div>
  );
};

export default QuizApp;
