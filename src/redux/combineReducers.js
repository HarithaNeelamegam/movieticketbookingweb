import { combineReducers } from "@reduxjs/toolkit";
import ReducerSlice from "./bookingReducerSlice";

export let reducer=combineReducers({
    movies:ReducerSlice.reducer,
})