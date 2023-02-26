import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './AppProvider';

function SingleCocktail() {

    let [cocktail,setcocktail]=useState({});
   let [loading,setloading]= useState(false)
    let {id}=useParams();
    let fetchCocktail=async ()=>
    {
        setloading(true)
       try
       {
        let {data}=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        console.log(data.drinks[0]);
        if(data.drinks)
        {
            setcocktail(data.drinks[0])
        }
        else
        {
            setcocktail({})
        }
        setloading(false)

       }
       catch(err)
       {
        console.log(err.resonse);
        setloading(false)
       }
    }

    useEffect(()=>
    {
        fetchCocktail()
    },[id])

   
    if(loading)
    {
        return <h1>Loading....</h1>
    }

  return (
    <div>
        <img className='img-fluid' src={cocktail.strDrinkThumb} alt="" height={300} width={300} />
        <p className='lead'>{cocktail.strInstructions}</p>
        <h1>{cocktail.strCategory}</h1>
    </div>
  )
}

export default SingleCocktail