import { createStore } from "redux";
import { cakeReducer } from "./cake shop/cakeReducer";
import { iceReducer } from "./icecream shop/icecreamReducer";

//! Counter
// export let store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// export let store=createStore(rootReducer,applyMiddleware(logger))


//! cake
// export let store=createStore(cakeReducer);


//! ice
export let store=createStore(iceReducer)