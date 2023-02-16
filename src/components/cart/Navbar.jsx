import React from 'react'
import { useGlobalContext } from './AppProvider'

function Navbar() {

    let {TotalItems}=useGlobalContext()
  return (
    <nav style={{background:"pink",padding:"20px",textDecoration:"none"}}>
        <a href="">Home</a>
        <a href="" style={{marginLeft:"500px",textDecoration:"none",fontSize:"40px"}}>
            Cart<sup style={{fontSize:"20px"}}>{TotalItems}</sup> </a>
    </nav>
  )
}

export default Navbar