import { BUY_CAKE } from "./cakeTypes"

let initialState={totalCakes:10}
let cakeReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_CAKE:return {totalCakes:state.totalCakes-1};
        default:return state;
    }
}

export {cakeReducer}