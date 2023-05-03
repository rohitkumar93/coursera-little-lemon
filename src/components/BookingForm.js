import React from "react";
import useForm from "../hooks/useForm";
import "./BookingForm.css";

const BookingForm = ({ navigate }) => {
  const {
    form,
    timeSlots,
    isFormValid,
    changeNameHandler,
    changeEmailHandler,
    changeDateHandler,
    changeTimeHandler,
    changeGuestsHandler,
    changeTableHandler,
    changeOccasionHandler,
    changeMessageHandler,
    submitHandler,
  } = useForm();

  function handleSubmit() {
    const response = submitHandler();
    return response ? navigate("/booking-confirmation") : null;
  }

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="column">
        <label htmlFor="name">
          <p>Name</p>
          <input
            value={form.name}
            onChange={changeNameHandler}
            type="text"
            id="name"
          />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input
            value={form.email}
            onChange={changeEmailHandler}
            type="email"
            id="email"
          />
        </label>
        <label htmlFor="res-date">
          <p>Date</p>
          <input
            value={form.date}
            onChange={changeDateHandler}
            type="date"
            id="res-date"
            placeholder="Date"
          />
        </label>
        <label htmlFor="res-time">
          <p>Time</p>
          <select onChange={changeTimeHandler} value={form.time} id="res-time">
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="guests">
          <p>Number of guests</p>
          <input
            value={form.numberOfGuests}
            onChange={changeGuestsHandler}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
          />
        </label>
      </div>
      <div className="column">
        <label htmlFor="message">
          <p>Any allergies or further requests? (pets etc.)</p>
          <textarea
            value={form.message}
            onChange={changeMessageHandler}
            name="message"
            id="message"
            cols="30"
            rows="5"
          ></textarea>
        </label>
      </div>
      <div className="submit-container">
        <button disabled={!isFormValid}>Book Table</button>
      </div>
    </form>
  );
};

export default BookingForm;
