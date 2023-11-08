import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import Modal from './Modal';

function Portal() {

    let [show,setShow]=useState(false);
    let showModel=()=>
    {
        setShow(true)
    }
    let hideModel=()=>
    {
        setShow(false)
    }
  return (
    <div style={{background:"blue",width:"100px",height:"200px",overflow:"hidden"}}>
      <button onClick={showModel}>show</button>
      {show && createPortal(<Modal hideModel={hideModel}/>,document.getElementById("myportal"))}
    </div>
  )
}

export default Portal
