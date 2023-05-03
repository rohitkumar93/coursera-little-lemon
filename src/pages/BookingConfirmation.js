import React from "react";

const BookingConfirmation = ({
  name,
  date,
  time,
  guests,
  occasion = false,
  table = false,
  request = false,
}) => {
  return (
    <main>
      <section
        style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}
      >
        <h1>
          Your booking has been confirmed {name} for {guests} @ {date} {time}
        </h1>
      </section>
    </main>
  );
};

export default BookingConfirmation;
