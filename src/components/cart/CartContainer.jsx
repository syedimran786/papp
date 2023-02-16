import React from 'react'
import { useGlobalContext } from './AppProvider'
import CartItem from './CartItem';

function CartContainer() {

    let {carts,totalAmount,clearCart}=useGlobalContext();
    if(carts.length===0)
    {
        return <h1>Your Cart Is Empty</h1>
    }
    // console.log(carts);
  return (
    <div style={{display:"flex",justifyContent:"space-around",border:"2px solid yellow",flexWrap:"wrap"}}>
        {carts?.map((c,i)=>
        {
            return <CartItem  key={i} {...c}/>
        })}
        <h1>Total: {Math.ceil(totalAmount)}</h1>
        <h1><button onClick={clearCart}>Clear Cart</button></h1>
    </div>
  )
}

export default CartContainer