import { combineReducers } from "redux";
import { cakeReducer } from "./cake shop/cakeReducer";
import { iceReducer } from "./icecream shop/icecreamReducer";
import {userReducer} from './users/userReducer'

export let rootReducer=combineReducers({cakeReducer,iceReducer,userReducer})