import { BUY_ICE } from "./icecreamTypes"


let intalstate={totalIce:20}

export let iceReducer=(state=intalstate,action)=>
{
    switch(action.type)
    {
        case BUY_ICE:return {...state,totalIce:state.totalIce-1}
        default:return state
    }
}