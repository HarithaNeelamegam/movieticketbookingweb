import { call, put } from "redux-saga/effects";
import { getMovieList,getUpcomings,getEvents } from "./apiRequest";
import { prSaveMovieslist,prSaveUpcoming,prSaveEvents } from "../bookingReducerSlice";

export function* handleMoviesList() {
  try {
    const response = yield call(getMovieList);
    const { data } = response;
    yield put(prSaveMovieslist(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handleUpcoming() {
  try {
    const response = yield call(getUpcomings);
    const { data } = response;
    yield put(prSaveUpcoming(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handleEvents() {
  try {
    const response = yield call(getEvents);
    const { data } = response;
    yield put(prSaveEvents(data));
  } catch (error) {
    console.log(error);
  }
}
