import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {incrementAction,decrementAction} from './actions/index'

function ReduxCounter() {

    let countstate=useSelector((state)=>
    {

        // console.log(state);
        // console.log(state.counterReducer)
        return state.counterReducer
    });
    let dispatch=useDispatch()
  return (
    <div>
        <h1>Count: {countstate.count}</h1>
        <button onClick={()=>dispatch(incrementAction())}>+</button> 
        <button onClick={()=>dispatch(decrementAction( ))}>-</button>
    </div>
  )
}

export default ReduxCounter