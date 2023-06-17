import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiGetUpcoming } from "../redux/bookingReducerSlice";
import { useSelector } from "react-redux";

const UpcomingMovies = () => {
  const dispatch = useDispatch();

  let { moviesUpcoms } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(apiGetUpcoming());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        {moviesUpcoms.map((item) => {
          return (
            <div className="col-11 col-md-4 col-lg-6 mx-0 mb-4 pb-2">
              <div key={item._id}>
                <div className="card h-100 w-50">
                  <div className="card-body text-justify">
                    <img
                      src={item.imageUrl}
                      style={{ height: "200px", width: "50%" }}
                    />
                    <h1>{item.name}</h1>
                    <h2>{item.language}</h2>
                    <h3>{item.rate}</h3>
                    <h4>{item.type}</h4>
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
export default UpcomingMovies;
