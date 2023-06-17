import React from "react";
import LatestMovies from "./latestMovies";
import { Routes,Route } from "react-router-dom";
import Header from "./header";
import MovieDetails from "./movieDetails";
import TicketBookingPage from "./ticketBookingPage";
import FinalTicketPage from "./finalBooking";
import UpcomingMovies from "./upcomingmovies";
import Events from "./events";
const Movies=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/latestMovies" element={<LatestMovies/> }/>
                <Route path="/upcomingmovies" element={<UpcomingMovies/> }/>
                <Route path="/events" element={<Events/>}/>

                <Route path="/moviedetails/:_id" element={<MovieDetails/> }/>
                <Route path="/ticketbookingpage" element={<TicketBookingPage/> }/>
                <Route path="/finalBooking" element={<FinalTicketPage/> }/>

           
            </Routes>
        </div>
    )
};
export default Movies;



