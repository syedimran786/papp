import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./userTypes"


let initialState=
{
    loading:false,
    users:[],
    error:""
}


export let userReducer=(state=initialState,action)=>
{
  
    switch(action.type)
    {
        case FETCH_REQUEST:return {...state,loading:true}
        case FETCH_SUCCESS:return {...state,loading:false,users:action.payload}
        case FETCH_ERROR:return {...state,loading:false,error:action.payload}
        default: return state
    }
}