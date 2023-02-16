import { BUY_CAKE } from "./cakeTypes"

let initialState={numberOfCakes:10}
let cakeReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_CAKE:return {numberOfCakes:state.numberOfCakes-1};
        default:return state;
    }
}

export {cakeReducer}