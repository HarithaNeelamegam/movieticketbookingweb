import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetEvents } from "../redux/bookingReducerSlice";
const Events = () => {
  const dispatch = useDispatch();

  let { moviesEvents } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(apiGetEvents());
  }, [dispatch]);
  return (
    <>
      <div className="row">
        {moviesEvents.map((item) => {
          return (
            <div className="col-11 col-md-4 col-lg-6 mx-0 mb-4 pb-2">
              <div key={item._id}>
                <div className="card h-100 w-50">
                  <div className="card-body text-justify">
                    <h1>{item.name}</h1>
                    <img
                      src={item.imageUrl}
                      style={{ height: "200px", width: "50%" }}
                    />
                    <h4>Rating:{item.rate}</h4>
                    <h3>Genre:{item.type}</h3>
                    <h2>{item.language}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Events;
