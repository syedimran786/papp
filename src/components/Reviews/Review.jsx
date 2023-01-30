import React, { useState } from 'react';
import people from './reviews'
import '../scss/Reviews.scss'
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'

function Review() {
  let [index,setIndex]=useState(0);
  let {id,name,job,image,text}=people[index];
  // let image=people[index];

  let chekIndex=(number)=>
  {
    if(number===people.length)
    {
      return 0
    }
    if(number===-1)
    {
      return people.length-1
    }
    return number
  }

  let getNextImage=()=>
  {
    setIndex(pi=>
      {
        return chekIndex(pi+1)
      })
  }
  let getPrevImage=()=>
  {
    setIndex(pi=>
      {
        return chekIndex(pi-1)
      })
  }

  let randomImage=()=>
  {
    let ri=Math.floor(Math.random()*people.length);
    if(ri===index)
    {
      ri=index+1
    }
    setIndex(chekIndex(ri))
  }
  return (
    <main className='card'>
      <img src={image} alt="" />
      <div className='info'>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
      <p>
        {text.slice(0,150)}
      </p>
      <div className='btns'>
      <button onClick={getPrevImage}><FaChevronLeft/></button>
      <span>{index}</span>
      <button onClick={getNextImage}><FaChevronRight/></button>
      </div>
      <div>
        <button onClick={randomImage}>random</button>
      </div>
    </main>
  )
}

export default Review