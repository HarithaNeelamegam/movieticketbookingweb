import axios from "axios";
 export let getMovieList=async()=>{
    let url="http://3.17.216.66:4000/latest";
    return await axios.get(url);
 };
 export let getUpcomings=async()=>{
   let url="http://3.17.216.66:4000/upcomingMovies";
   const data=await axios.get(url);
   return data;
   
};
export let getEvents=async()=>{
   let url="http://3.17.216.66:4000/events";
   const data=await axios.get(url);
   return data;
   
};