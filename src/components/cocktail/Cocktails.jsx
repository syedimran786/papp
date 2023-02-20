import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from './AppProvider';

function Cocktails() {

    let {loading,cocktails}=useGlobalContext();

   

    if(loading)
    {
        return <h1>Loading....</h1>
    }

    if(cocktails.length===0)
    {
        return <h1>No cocktails found</h1>
    }

  return (
    <div>
        {cocktails.map(cocktail=>
            {
                return <Link className='text-decoration-none' key={cocktail.idDrink} to={`/cocktail/${cocktail.idDrink}`}>
                <h1>{cocktail.strDrink}</h1>
                </Link>
            })}
    </div>
  )
}

export default Cocktails