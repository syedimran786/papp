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

//! if we want to use payload while dispaching we have to give an argument 
//! for mapstatetoprops and mapstatetodispatch.

// let mapDispatchToProps=(dispatch)=>
// {
//     return {buyCake:(number)=>dispatch(buyCake())}
// }

// export let buyIce=(number=1)=>
// {
//     return {type:BUY_ICE,payload:number}
// } 