import React, { useRef, useState } from 'react'
import { useGlobalContext } from './AppProvider';

function SearchCocktail() {
    let newCocktail=useRef();
    let {setsearchCocktail}=useGlobalContext()

    let changenewcocktail=()=>{
       
        setsearchCocktail(newCocktail.current.value)
    }
  return (
   <form action="">
    <div>
        <input type="search" ref={newCocktail} placeholder='cocktail name' onChange={changenewcocktail} />
    </div>
   </form>
  )
}

export default SearchCocktail