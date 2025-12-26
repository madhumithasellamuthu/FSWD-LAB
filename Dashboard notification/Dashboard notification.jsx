import { useState } from "react";

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New student registered", type: "info", read: false },
    { id: 2, text: "Assignment submitted", type: "success", read: false }
  ]);

  function addNotification(type) {
    const newNotification = {
      id: Date.now(),
      text:
        type === "warning"
          ? "System maintenance scheduled"
          : "New dashboard update available",
      type,
      read: false
    };
    setNotifications([newNotification, ...notifications]);
  }

  function markAsRead(id) {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  }

  function clearAll() {
    setNotifications([]);
  }

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div style={styles.container}>
      <h2>Dashboard Notifications</h2>

      {/* Notification Controls */}
      <div style={styles.controls}>
        <button onClick={() => addNotification("info")}>Add Info</button>
        <button onClick={() => addNotification("success")}>Add Success</button>
        <button onClick={() => addNotification("warning")}>Add Warning</button>
      </div>

      {/* Notification Bell */}
      <div style={styles.bell}>
        🔔 Notifications {unreadCount > 0 && `(${unreadCount})`}
      </div>

      {/* Notification List */}
      <div style={styles.list}>
        {notifications.length === 0 && <p>No notifications</p>}

        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              ...styles.notification,
              background: n.read ? "#f0f0f0" : "#e6f0ff",
              borderLeft: `6px solid ${getColor(n.type)}`
            }}
          >
            <span>{n.text}</span>
            {!n.read && (
              <button
                style={styles.readBtn}
                onClick={() => markAsRead(n.id)}
              >
                Mark as read
              </button>
            )}
          </div>
        ))}
      </div>

      {notifications.length > 0 && (
        <button onClick={clearAll} style={styles.clearBtn}>
          Clear All
        </button>
      )}
    </div>
  );
}

function getColor(type) {
  if (type === "success") return "green";
  if (type === "warning") return "orange";
  return "blue";
}

const styles = {
  container: {
    maxWidth: "450px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  controls: {
    display: "flex",
    gap: "10px",
    marginBottom: "12px"
  },
  bell: {
    fontWeight: "bold",
    marginBottom: "10px"
  },
  list: {
    marginBottom: "12px"
  },
  notification: {
    padding: "10px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  readBtn: {
    fontSize: "12px"
  },
  clearBtn: {
    width: "100%",
    padding: "8px",
    background: "#d9534f",
    color: "#fff",
    border: "none"
  }
};
