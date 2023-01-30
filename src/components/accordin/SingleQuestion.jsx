import React, { useState } from 'react'
import { FaPlus,FaMinus } from 'react-icons/fa'

function SingleQuestion({name,text,id}) {
    let [toggle,setToggle]=useState(false);

    let changeToggle=()=>
    {
        setToggle(!toggle)
    }
  return (
    <section className='accordin'>
        <div className='accordin-heading'>
            <h3>{name}</h3>
            <button onClick={changeToggle}>{toggle?<FaPlus/>:<FaMinus/>}</button>
        </div>
        {toggle &&  <div className='accordin-data'>
            {text}
        </div>}
       
    </section>
  )
}

export default SingleQuestion