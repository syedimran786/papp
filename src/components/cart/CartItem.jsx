import React from 'react'
import { useGlobalContext } from './AppProvider'

function CartItem({title,id,amount,price}) {

    let {removeItem,increaseItem,decreaseItem}=useGlobalContext()
  return (
    <div  style={{width:"300px",border:"2px solid red",textAlign:"center",margin:"20px"}}>
    <h1>{title}</h1>
    <h2>Price: {Math.floor(price*amount)}</h2>
    <h3 onClick={()=>(removeItem(id))}>Remove</h3>
    <div>
    <button onClick={()=>(increaseItem(id))}>+</button>
    <span>{amount}</span>
    <button onClick={()=>(decreaseItem(id))}>-</button>
    </div>

</div>
  )
}

export default CartItem