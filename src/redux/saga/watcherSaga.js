import {takeLatest} from "redux-saga/effects";
import { handleEvents, handleMoviesList,handleUpcoming } from "./apiHandler";
import { apiGetMovie ,apiGetEvents,apiGetUpcoming} from "../bookingReducerSlice";

export function* watcherGetMovies(){
    yield takeLatest(apiGetMovie.type,handleMoviesList);

}
export function* watcherGetUpcoming(){
    yield takeLatest(apiGetUpcoming.type,handleUpcoming);

}
export function* watcherGetEvents(){
    yield takeLatest(apiGetEvents.type,handleEvents);

}