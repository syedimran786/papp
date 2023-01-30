import { createStore ,applyMiddleware} from "redux";
import { cakeReducer } from "./cake shop/cakeReducer";
import { rootReducer } from "./cobineReducers";
//! refer 1.3 section of  browser installation in github doc 
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from "redux-logger";
import { iceReducer } from "./icecream shop/icecreamReducer";

//! Counter
// export let store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// export let store=createStore(rootReducer,applyMiddleware(logger))


//! cake
// export let store=createStore(cakeReducer);


//! ice
// export let store=createStore(iceReducer)

//! both ice and cake
export let store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))
