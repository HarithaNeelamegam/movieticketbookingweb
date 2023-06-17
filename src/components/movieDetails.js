import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prSetSingleMovie } from "../redux/bookingReducerSlice";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  let { _id } = useParams();

  let dispatch = useDispatch();

  let { singleMovie } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(prSetSingleMovie(_id));
  }, [dispatch, _id]);

  return (
    <>
      <nav className="bg-info py-3 text-center">
        <p className="fs-1">MOVIES</p>
      </nav>

      <div class="grid-container">
        <div class="grid-item item1">
          <img src={singleMovie.imageUrl} className="img" />
        </div>

        <div class="grid-item item4"> Movie name:{singleMovie.name}</div>

        <div class="grid-item item5">
          <strong>Rating:{singleMovie.rate}</strong>
        </div>
      </div>
      <Link to="/ticketbookingpage">
        <footer className="bg-info py-3 text-center">
          <p className="fs-2 text-dark">BOOK NOW</p>
        </footer>
      </Link>
    </>
  );
};
export default MovieDetails;
