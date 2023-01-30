import { combineReducers } from "redux";
import { cakeReducer } from "./cake shop/cakeReducer";
import { iceReducer } from "./icecream shop/icecreamReducer";

export let rootReducer=combineReducers({cakeReducer,iceReducer})