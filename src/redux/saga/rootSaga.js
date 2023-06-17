import {all} from "redux-saga/effects";
import { watcherGetEvents, watcherGetMovies, watcherGetUpcoming } from "./watcherSaga";

export function* rootSaga(){
    yield all([watcherGetMovies(),watcherGetUpcoming(),watcherGetEvents()]);
}