import { createSlice } from "@reduxjs/toolkit";

let initialDetails = {
  Date: null,
  Time: null,
  Seats: null,
};
let ReducerSlice = createSlice({
  name: "movies",
  initialState: {
    _id: 0,
    moviesEvents: [],

    moviesList: [],
    moviesUpcoms: [],
    singleMovie: [],
    selectedData: { ...initialDetails },
    finalBooking: [],
  },
  reducers: {
    ticketInput: (state, action) => {
      let { value, title } = action.payload;
      let _selectedData = { ...state.selectedData };
      _selectedData[title] = value;
      state.selectedData = _selectedData;
      console.log(action.payload);
    },
    submitTicket: (state) => {
      let _finalBooking = [...state.finalBooking];
      _finalBooking.push({ ...state.selectedData });
      state.finalBooking = _finalBooking;

      state.selectedData = { ...initialDetails };
    },

    prSetSingleMovie: (state, action) => {
      let _id = action.payload;
      let movieSingle = state.moviesList.find((movie) => {
        return movie._id === _id;
      });
      if (movieSingle !== undefined) {
        state.singleMovie = movieSingle;
      } else {
        window.location.assign("/");
      }
    },
    prSaveMovieslist: (state, action) => {
      state.moviesList = action.payload;
    },
    prSaveUpcoming: (state, action) => {
      state.moviesUpcoms = action.payload;
    },
    prSaveEvents: (state, action) => {
      state.moviesEvents = action.payload;
    },
    apiGetEvents: () => {},
    apiGetMovie: () => {},
    apiGetUpcoming: () => {},
  },
});
export default ReducerSlice;
export let {
  prSaveMovieslist,
  apiGetEvents,
  prSaveEvents,
  apiGetMovie,
  apiGetUpcoming,
  prSetSingleMovie,
  prSaveUpcoming,
  ticketInput,
  submitTicket,
} = ReducerSlice.actions;
