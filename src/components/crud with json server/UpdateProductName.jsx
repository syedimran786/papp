import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { HTTP } from './axiosconfig';

function UpdateProductName() {
  let [product,setProduct]=useState({id:"",title:""});

  let navigate=useNavigate()

    let changeProduct=({target:{value,name}})=>
    {
        setProduct({...product,[name]:value})
    }

    
    let updateProductName=async(e)=>
    {
        e.preventDefault()
        if(!product.title)
        {
            alert("please add the product name")
            return false
        }
        let {data}=await HTTP.patch(`products/${product.id}`,{title:product.title});
        navigate("/getProducts")
     console.log(data);
    
    }


    useEffect(() => {
        setProduct({...product,id:localStorage.getItem("id"),title:localStorage.getItem("title")})
    }, [])
  return (
    <div>
        <form onSubmit={updateProductName}>
            <div>
                <input type="text" placeholder='Product Name' name='title'
                value={product.title} onChange={changeProduct}  />
            </div>
            <hr />
            <div>
                <button>Update Name</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateProductName