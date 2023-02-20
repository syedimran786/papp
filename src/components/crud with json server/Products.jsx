import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Products.scss"
import {HTTP} from './axiosconfig'



function Products() {
    let [products, setProducts] = useState([]);

    let navigate=useNavigate()

    let getProducts = async () => {
        try {

            let { data } = await HTTP.get("products");
            setProducts(data);
            // console.table(data);
        }
        catch (error) {
            console.error(error.response);
        }
    }

    let deleteProduct=async (id)=>
    {
        let res=await HTTP.delete(`products/${id}`);
        console.log(res);
        getProducts();

    }

    let updateProduct=(id)=>
    {
   
       navigate(`/updateProducts/${id}`)
    }

    let updateProductName=({id, title})=>
    {
        localStorage.setItem("id", id)
        localStorage.setItem("title", title)

    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <section>
            <table style={{border:"2px solid white",borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                        <th>SL NO</th>
                        <th>Title</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map(({ id, title, price },i) => {
                        return <tr key={id}>
                            <td>{i+1}</td>
                            <td>{title}</td>
                            <td>{price}</td>
                            <td>
                                <button onClick={()=>{deleteProduct(id)}}>Delete</button>
                            </td>
                            <td>
                                <button onClick={()=>{updateProduct(id)}}>Update</button>
                            </td>
                            <td>
                            <Link to="/updateproductName">
                            <button onClick={()=>{updateProductName({id, title})}}>Update Product Name</button>
                            </Link>
                               
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
                   
        </section>
    )
}

export default Products