import axios from 'axios';
import React, { useState } from 'react'
import {HTTP} from './axiosconfig'
import { v4 as uuidv4 } from 'uuid';

function AddProducts() {
    let [product,setProduct]=useState({title:"",price:""});



    let changeProduct=({target:{value,name}})=>
    {
        setProduct({...product,[name]:value})
    }

    let addProduct=async (e)=>
    {
        e.preventDefault()
        if(!product.title || !product.price)
        {
            alert("please add the product and price")
            return false
        }
        let res=await HTTP.post("products",{id:uuidv4(),...product});
        setProduct({title:"",price:""})
        console.log(res);
        // navigate("/addProducts")
    }

 

    
  return (
    <div>
        <form onSubmit={addProduct}>
            <div>
                <input type="text" placeholder='Product Name' name='title'
                value={product.title} onChange={changeProduct}  />
            </div>
            <hr />
            <div>
                <input type="text" placeholder='Price'
                value={product.price} onChange={changeProduct} name="price"  />
            </div>
            <hr />
            <div>
                <button onClick={addProduct}>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddProducts