import React from "react";

function FlightBooking() {
  const bookTicket = () => {
    alert("Welcome to SkyWay Airlines!");

    // Get passenger name
    const name = prompt("Enter Passenger Name:");
    if (!name || name.trim() === "") {
      alert("Booking cancelled. Name is required.");
      return;
    }

    // Get destination
    const destination = prompt("Enter Destination:");
    if (!destination || destination.trim() === "") {
      alert("Booking cancelled. Destination is required.");
      return;
    }

    // Get number of tickets
    const tickets = prompt("Enter Number of Tickets:");
    if (!tickets || isNaN(tickets) || tickets <= 0) {
      alert("Invalid ticket count. Booking cancelled.");
      return;
    }

    // Confirm booking
    const confirmBooking = window.confirm(
      `Please confirm your booking:\n\n` +
        `Passenger: ${name}\n` +
        `Destination: ${destination}\n` +
        `Tickets: ${tickets}`
    );

    if (confirmBooking) {
      alert(`✅ Booking Successful!\n\nHappy Journey, ${name}!`);
    } else {
      alert("❌ Booking Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>✈️ Flight Ticket Booking System</h2>
      <button onClick={bookTicket} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Book Flight
      </button>
    </div>
  );
}

export default FlightBooking;
