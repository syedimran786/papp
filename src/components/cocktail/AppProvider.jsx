import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react';

let Cocktailcontext=createContext()
function AppProvider({children}) {

    let [searchCocktail,setsearchCocktail]=useState('a')
    let [loading,setloading]=useState(false);
    let [cocktails,setcocktails]=useState([]);

    let fetchCocktails=async ()=>
    {
        setloading(true)
       try
       {
        let {data}=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchCocktail}`);
        // console.log(data);
        if(data.drinks)
        {
            setcocktails(data.drinks)
        }
        else
        {
            setcocktails([])
        }
        setloading(false)

       }
       catch(err)
       {
        console.log(err.resonse);
        setloading(false)
       }
    }
console.log(searchCocktail);
    useEffect(()=>
    {
        fetchCocktails()
    },[searchCocktail])


  return (
    <Cocktailcontext.Provider value={{loading,cocktails,setsearchCocktail}}>
        {children}
    </Cocktailcontext.Provider>
  )
}


export let useGlobalContext=()=>
{
    return useContext(Cocktailcontext)
}
export default AppProvider