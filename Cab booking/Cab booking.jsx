import React from "react";

function CabBooking() {
  const bookCab = () => {
    alert("Welcome to QuickRide Cabs!");

    // Get passenger name
    const name = prompt("Enter your Name:");
    if (!name || name.trim() === "") {
      alert("Booking cancelled. Name is required.");
      return;
    }

    // Get pickup location
    const pickup = prompt("Enter Pickup Location:");
    if (!pickup || pickup.trim() === "") {
      alert("Booking cancelled. Pickup location is required.");
      return;
    }

    // Get drop location
    const drop = prompt("Enter Drop Location:");
    if (!drop || drop.trim() === "") {
      alert("Booking cancelled. Drop location is required.");
      return;
    }

    // Get cab type
    const cabType = prompt("Enter Cab Type (Mini / Sedan / SUV):", "Mini");
    if (!cabType || !["Mini", "Sedan", "SUV"].includes(cabType)) {
      alert("Invalid cab type. Booking cancelled.");
      return;
    }

    // Get estimated distance
    const distance = prompt("Enter Estimated Distance (in km):");
    if (!distance || isNaN(distance) || distance <= 0) {
      alert("Invalid distance. Booking cancelled.");
      return;
    }

    // Calculate fare
    const ratePerKm =
      cabType === "Mini" ? 10 : cabType === "Sedan" ? 15 : 20;
    const fare = distance * ratePerKm;

    // Confirm booking
    const confirmBooking = window.confirm(
      `Please confirm your cab booking:\n\n` +
        `Name: ${name}\n` +
        `Pickup: ${pickup}\n` +
        `Drop: ${drop}\n` +
        `Cab Type: ${cabType}\n` +
        `Distance: ${distance} km\n` +
        `Estimated Fare: ₹${fare}`
    );

    if (confirmBooking) {
      alert(
        `✅ Cab Booked Successfully!\nDriver will reach you soon, ${name}.\nFare: ₹${fare}`
      );
    } else {
      alert("❌ Booking Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🚖 Online Cab Booking System</h2>
      <button
        onClick={bookCab}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Book a Cab
      </button>
    </div>
  );
}

export default CabBooking;
