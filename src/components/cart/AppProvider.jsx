import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './cartReducer'
import { cartItems } from './cartItems' 

let CartContext=React.createContext()

let initialState={
  totalAmount:0,
  loading:false,
  TotalItems:0,
  carts:cartItems
}

function AppProvider({children}) {
  let [state,dispatch]=useReducer(reducer, initialState);

  useEffect(()=>
  {
    dispatch({type:"GET_TOTALS"})
  },[state.carts]);

//! make carts as empty array in initialState  when you want to fetch using below methods
  // let fetchData=async()=>
  // {
  //   dispatch({type:"LOADING"});
  //   let cart=await fetch("https://course-api.com/react-useReducer-cart-project");
  //   cart+=await cart.json()
  //   dispatch({type:"FETCH_SUCCESS",payload:cart});

  // }
  // useEffect(()=>
  // {
  //   fetchData()
  // },[]);


  let clearCart=()=>
  {
    dispatch({type:"CLEAR_CART"})
  }

  let removeItem=(id)=>
  {
    dispatch({type:"REMOVE_ITEM",payload:id})
  }
  let increaseItem=(id)=>
  {
    dispatch({type:"INCREASE_ITEM",payload:id})
  }

  let decreaseItem=(id)=>
  {
    console.log('decrment');

    dispatch({type:"DECREASE_ITEM",payload:id})
  }

  if(state.loading)
  {
    return <h1>Loading......</h1>
  }
  return (
   <CartContext.Provider value={{...state,clearCart,removeItem,increaseItem,decreaseItem}}>
        {children}
   </CartContext.Provider>
  )
}

//! Custom hook 
export let useGlobalContext=()=>
{
    return useContext(CartContext)
}
export default AppProvider