import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Products.scss"
import UpdateProducts from './UpdateProducts';


function Products() {
    let [products, setProducts] = useState([]);

    let navigate=useNavigate()

    let getProducts = async () => {
        try {

            let { data } = await axios.get("http://localhost:4000/products");
            setProducts(data);
            // console.table(data);
        }
        catch (error) {
            console.error(error.response);
        }
    }

    let deleteProduct=async (id)=>
    {
        let res=await axios.delete(`http://localhost:4000/products/${id}`);
        console.log(res);
        getProducts();

    }

    let updateProduct=(id)=>
    {
   
       navigate(`/updateProducts/${id}`)
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
                        </tr>
                    })}
                </tbody>
            </table>
                   
        </section>
    )
}

export default Products