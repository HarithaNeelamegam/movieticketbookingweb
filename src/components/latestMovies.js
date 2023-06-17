import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetMovie } from "../redux/bookingReducerSlice";
import { Link, useNavigate,useParams } from "react-router-dom";
const LatestMovies = () => {
  const dispatch = useDispatch();
  let { moviesList } = useSelector((state) => state.movies);
  let navigate=useNavigate();
 
  const handleMoviePress=()=>{
    let path="/movieDetails";
    navigate(path);
  }
useEffect(() => {   
   dispatch(apiGetMovie());
   return () => {
    // Reset or unsubscribe from the previous data
    // This ensures that the component starts fresh when navigating back to it
  };
}, [dispatch]);
  
  return (
    <> 
      <section className="container">
        <div className="row">
          
            {moviesList.map((movies) => {
              return (
                <div key={movies._id}>
                  <div className="col-11 col-md-4 col-lg-3 mx-0 mb-4 pb-3">
                    <Link to={"/moviedetails/" + movies._id}>
                      <div className="card">
                        <img src={movies.imageUrl} />

                        <div className="card-body text-justify">
                          <h1>{movies.name}</h1>

                          <h2>{movies.rate}</h2>

                          <h3>{movies.type}</h3>

                          <h4>{movies.language}</h4>
                        </div>
                        <div className="card-footer text-center fs-4 bg-primary">
                        <button onClick={handleMoviePress}>  BOOK NOW</button>
                        </div>
                      </div>
                    </Link>
                  </div>
               </div>
              );
            })}
         
        </div> 
      </section>
    </>
  );
};
export default LatestMovies;
