import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function UpdateProducts() {

    let [product,setProduct]=useState({title:"",price:""});

    let {pid}=useParams();

    let changeProduct=({target:{value,name}})=>
    {
        setProduct({...product,[name]:value})
    }


    let getProducts = async () => {
        try {

            let { data } = await axios.get(`http://localhost:4000/products/${pid}`);
            setProduct(data);
        
            
        }
        catch (error) {
            console.error(error.response);
        }
    }

    
    let updateProduct=async(e)=>
    {
        e.preventDefault()
        if(!product.title || !product.price)
        {
            alert("please add the product and price")
            return false
        }
        let {data}=await axios.put(`http://localhost:4000/products/${pid}`,{title:product.title,price:product.price});
        
     console.log(data);
    }


    useEffect(() => {
        getProducts();
    }, [])
  return (
    <div>
        <form onSubmit={updateProduct}>
            <div>
                <input type="text" placeholder='Product Name' name='title'
                value={product.title} onChange={changeProduct}  />
            </div>
            <hr />
            <div>
                <input type="text" placeholder='Price' name='price'
                value={product.price} onChange={changeProduct} />
            </div>
            <hr />
            <div>
                <button>Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateProducts