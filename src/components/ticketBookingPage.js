import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ticketInput, submitTicket } from "../redux/bookingReducerSlice";
import moment from "moment";

const TicketBookingPage = () => {
  let navigate = useNavigate();
  const { selectedData } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  let { singleMovie } = useSelector((state) => state.movies);

  const latestDates = [];
  for (let i = 0; i < 5; i++) {
    const date = moment().add(i, "days").format("YYYY-MM-DD");
    latestDates.push(date);
  }

  let handleInput = (event) => {
    let { value, title } = event.target;
    dispatch(ticketInput({ value, title }));
  };

  let submitDetails = () => {
    dispatch(selectedData);
    console.log(selectedData);
  };

  const handleBookNow = (event) => {
    event.preventDefault();
    dispatch(submitTicket());
    let path = "/finalBooking";
    navigate(path);
  };

  return (
    <>  <nav className="navbar navbar-light bg-light ">
        <h1 style={{ margin: '0 auto' }}>Booking</h1>
      </nav>
        <div className="row">
  <div className="col-11 col-md-4 col-lg-6 mx-0 mb-4 pb-2">
        <div className="card h-100 w-100">
          <div className="card-body text-justify">
            <h1>{singleMovie.name}</h1>
            <img src={singleMovie.imageUrl} />

            <form onSubmit={submitDetails} >
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <label htmlFor="date" >Select Date:</label>
              <select
                id="date"
                title="Date"
                value={selectedData.Date}
                onChange={handleInput}
              >
                <option value="">--Select Date--</option>
                {latestDates.map((date) => (
                  <option key={date} value={date}>
                    {moment(date).format("MMM DD YYYY")}
                  </option>
                ))}
              </select>

              <label htmlFor="time" >Select Time:</label>
              <select
                id="time"
                title="Time"
                value={selectedData.Time}
                onChange={handleInput}
              >
                <option value="9AM">9AM</option>
                <option value="12PM">12PM</option>
                <option value="3PM">3PM</option>
                <option value="6PM">6PM</option>
              </select>

              <label htmlFor="seats" style={{ marginBottom: '1rem',marginRight:"1rem" }}>Select Number of Seats:</label>
              <input
                type="number"
                id="seats"
                title="Seats"
                min="1"
                max="10"
                value={selectedData.Seats}
                onChange={handleInput}
              />

              <button onClick={handleBookNow} style={{marginLeft:"1rem"}}>Book Now</button>
           
           </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TicketBookingPage;
