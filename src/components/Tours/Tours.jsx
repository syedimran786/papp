import React, { useEffect, useState } from 'react'
import Tour from './Tour'
import {mytours} from './myTours'
import '../scss/Tours.scss'

function Tours() {

    let [filtered, setfiltered] = useState(mytours);

    let [searchTour,setsearchTour]=useState("")

    let deleteTour=(id)=>
    {
      let newTours=filtered.filter((t,i)=>
      {
        return i!==id
      })

      setfiltered(newTours);
      console.log(newTours);
      console.log("Deleted")
    }

    let tourfilter=()=>
    {
      let filteredData=mytours.filter(t=>
        {
          return t.place.toLowerCase().includes(searchTour)
        })
        setfiltered(filteredData);
    }

    useEffect(() => {
    //  settours(mytours)
    tourfilter()

    },[searchTour])

    if(mytours.length===0)
    {
      return <main>
        <h1>No tours left</h1>
        <button onClick={()=>(setfiltered(mytours))}>Refresh Tours</button>
      </main>
    }
    
  return (
    <div className='tours'>
      <input type="search"  onChange={({target:{value}})=>{setsearchTour(value)}} />
       {filtered.map((tour,i)=>
       {
        return <Tour key={i} {...tour} deleteTour={()=>(deleteTour(i))}/>
       })}
    </div>
  )
}

export default Tours