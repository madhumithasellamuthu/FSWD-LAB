import React from "react";

function HotelReservation() {
  const handleReservation = () => {
    // Step 1: Welcome
    alert("Welcome to Grand Palace Hotel 🏨");

    // Step 2: Collect details
    const guestName = prompt("Please enter your full name:");
    const checkIn = prompt("Enter your check-in date (DD/MM/YYYY):");
    const checkOut = prompt("Enter your check-out date (DD/MM/YYYY):");
    const guests = prompt("How many guests will be staying?");
    const roomType = prompt("Enter room type (Single / Double / Suite):");

    // Step 3: Confirm details
    const confirmReservation = confirm(
      `Please confirm your reservation details:\n
      Name: ${guestName}\n
      Check-in: ${checkIn}\n
      Check-out: ${checkOut}\n
      Guests: ${guests}\n
      Room Type: ${roomType}\n\n
      Do you want to proceed with booking?`
    );

    // Step 4: Final message
    if (confirmReservation) {
      alert(
        `🎉 Reservation Successful!\n\nThank you ${guestName}.
        Your ${roomType} room has been booked from ${checkIn} to ${checkOut}
        for ${guests} guest(s).`
      );
    } else {
      alert("Reservation Cancelled. We hope to serve you another time!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hotel Reservation System</h1>
      <button onClick={handleReservation}>Book a Room</button>
    </div>
  );
}

export default HotelReservation;
