import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIce } from './icecreamActions'

function IcecreamShop() {
    let ice=useSelector(state=>
        {
            return state
        })

        let dispatch=useDispatch()
  return (
    <div>
        <h1>ICE CREAM: {ice.iceReducer.totalIce}</h1>
        <button onClick={()=>dispatch(buyIce())}>Buy Ice</button>
    </div>
  )
}

export default IcecreamShop