import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./combineReducers";
import { rootSaga } from "./saga/rootSaga";

let sagaMiddleware=createSagaMiddleware();
let store=configureStore({

    reducer,middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;


