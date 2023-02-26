import React, { useState } from 'react'

function LoadMore({cocktail}) {
    let [loadMore,setloadMore]=useState(false)
    
console.log(cocktail);
  return (
    <div>
         <button onClick={()=>{setloadMore(!loadMore)}}>{loadMore?"Load Less":"Load More"}</button>
                    {loadMore?<div>
                        <img className='img-fluid' src={cocktail.strDrinkThumb} alt="" height={300} width={300} />
                        <p className='lead'>{cocktail.strInstructions}</p>
                        <h1>{cocktail.strCategory}</h1>
                        {console.log(cocktail.strDrinkThumb)}
                    </div>:
                    null}
    </div>
  )
}

export default LoadMore