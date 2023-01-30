import React, { useState } from 'react'

function Tour({place,image,content,deleteTour}) {

  let [toggleText,settoggleText]=useState(true)
  return (
    <div className='tour'>
        <img src={image} alt="" />
        <h2>{place}</h2>
        <p>{toggleText?content?.slice(0,400):content} -- <span onClick={()=>(settoggleText(!toggleText))}>{toggleText?"Read More":"Read Less"}</span></p>
        <button onClick={deleteTour}>Not Interested</button>
    </div>
  )
}

export default Tour