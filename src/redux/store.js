import { applyMiddleware } from "redux";
import { createStore } from "redux";
import logger from "redux-logger";
import { Reducer } from "./Reducer";

export const store = createStore(Reducer, applyMiddleware(logger))