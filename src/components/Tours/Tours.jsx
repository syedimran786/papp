import React, { useEffect, useState } from 'react'
import Tour from './Tour'
import {mytours} from './myTours'
import '../scss/Tours.scss'

function Tours() {
    let [tours, settours] = useState(mytours);

    let deleteTour=(id)=>
    {
      let newTours=tours.filter((t,i)=>
      {
        return i!=id
      })

      settours(newTours);
      console.log(newTours);
      console.log("Deleted")
    }

    // useEffect(() => {
    //  settours(mytours)
    // }, [])

    if(tours.length===0)
    {
      return <main>
        <h1>No tours left</h1>
        <button onClick={()=>(settours(mytours))}>Refresh Tours</button>
      </main>
    }
    
  return (
    <div className='tours'>
       {tours.map((tour,i)=>
       {
        return <Tour key={i} {...tour} deleteTour={()=>(deleteTour(i))}/>
       })}
    </div>
  )
}

export default Tours