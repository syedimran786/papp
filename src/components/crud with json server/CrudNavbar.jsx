import React from 'react'
import { Link } from 'react-router-dom'
import "./CrudNavbar.scss" 

function CrudNavbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/getProducts">Products</Link>
        {/* <Link to="/updateProducts">Update Products</Link> */}
        <Link to="/addProducts">Add Products</Link>
    </nav>
  )
}

export default CrudNavbar