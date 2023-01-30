import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

export let rootReducer=combineReducers({counterReducer})