import React, { useState } from "react";

const LivePoll = () => {
  const pollQuestion = "Which topic should we revise today?";

  const optionsList = [
    "React Basics",
    "JavaScript ES6",
    "Node.js",
    "MongoDB",
  ];

  const [votes, setVotes] = useState(
    optionsList.reduce((acc, option) => {
      acc[option] = 0;
      return acc;
    }, {})
  );

  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = Object.values(votes).reduce(
    (sum, count) => sum + count,
    0
  );

  const handleVote = (option) => {
    if (!hasVoted) {
      setVotes({
        ...votes,
        [option]: votes[option] + 1,
      });
      setHasVoted(true);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📊 Classroom Live Poll</h2>
      <h4>{pollQuestion}</h4>

      {optionsList.map((option) => {
        const percentage =
          totalVotes === 0
            ? 0
            : Math.round((votes[option] / totalVotes) * 100);

        return (
          <div key={option} style={styles.optionBox}>
            <button
              onClick={() => handleVote(option)}
              disabled={hasVoted}
              style={styles.voteBtn}
            >
              {option}
            </button>

            <div style={styles.resultBar}>
              <div
                style={{
                  ...styles.fill,
                  width: `${percentage}%`,
                }}
              ></div>
            </div>

            <p>
              Votes: {votes[option]} ({percentage}%)
            </p>
          </div>
        );
      })}

      <h4>Total Votes: {totalVotes}</h4>

      {hasVoted && <p style={styles.thanks}>✅ Vote submitted</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  optionBox: {
    marginBottom: "15px",
  },
  voteBtn: {
    width: "100%",
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
  },
  resultBar: {
    height: "10px",
    backgroundColor: "#ddd",
    marginTop: "5px",
  },
  fill: {
    height: "100%",
    backgroundColor: "#2196F3",
  },
  thanks: {
    color: "green",
    marginTop: "10px",
  },
};

export default LivePoll;
