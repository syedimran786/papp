// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function CourouselApi() {

//     let [carousel,setcaeousel]=useState([]);
//     let [index,setindex]=useState(0);
//     let {href,render}=carousel[index]!==undefined && carousel[index]

// // console.log(href,render)

//     let getimages=async ()=>
//     {
//         let {data}=await axios.get("https://images-api.nasa.gov/search?q=sun");
//         let newArr=[]
//         data.collection.items?.map(c=>
//             {
                
                
//                 for(let l of c.links)
//                 {
//                     newArr.push(l)
//                 }
              
//             })

//             setcaeousel(newArr)

//     }

//     useEffect(()=>
//     {
//         getimages()
//     },[])
    
//     // console.log(carousel)
   

//     let nextImage=()=>
//     {
//         // console.log(render)
//         if(!render)
//         {
//         setindex(index+2)

//         }
//         else
//         {
//             setindex(index+1)
//         }
//     }

//     let previousImage=()=>
//     {
//         if(!render)
//         {
//         setindex(index-2)

//         }
//         else
//         {
//             setindex(index-1)
//         }
       
//     }

//     useEffect(()=>
//     {
//         // console.log(render);
//         if(!render)
//         {
//             setindex(index+1)
//             // return href
//         }
//     },[render])
//         let getimage=()=>
//         {
//             console.log(render);
//             if(!render)
//             {
//                 setindex(index+1)
//                 // return href
//             }
//             return href
//         }
//   return (
//     <div>
      
//       {/* <ul>
//       {carousel.map((c)=>{
//         return <li  key={c.href}><img  src={c.render?c.href:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} alt="No Image" height={200} width={200} /></li>
//        }
       
//        )}
//       </ul> */}
//     <button onClick={previousImage}>Previous</button>
//       {/* <img src={render?href:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} height={300} width={300} alt="" /> */}
//       <img src={href} height={300} width={300} alt="" />
        
//         <button onClick={nextImage}>Next</button>
//     </div>
//   )
// }

// export default CourouselApi


import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function CourouselApi() {

    let [carousel,setcaeousel]=useState([]);
    let [param,setparam]=useState("sun");
    let [index,setindex]=useState(0);
    let {href,render}=carousel[index]!==undefined && carousel[index];


let getImages=async()=>
{
    let {data}=await axios.get(`https://images-api.nasa.gov/search?q=${param}`);
console.log(data)
let newArray=[]
  data.collection.items?.forEach(c=>
        {
            // console.log(c)
            for(let item of c.links) {
              newArray.push(item)
            }
            
        })
        setcaeousel(newArray)
}

let changeImage=({target:{value}})=>
{
    setparam(value)
}
useEffect(()=>
{
    getImages()
},[param])

useEffect(()=>
    {
        // console.log(render);
        if(!render)
        {
            setindex(index+1)
            // return href
        }
    },[render])
    console.log(render)
let nextImage=()=>
    {
        // // console.log(render)
        // if(!render)
        // {
        // setindex(index+2)

        // }
        // else
        // {
        //     setindex(index+1)
        // }

        setindex(index+1)

    }

    let previousImage=()=>
    {
        if(!render)
        {
        setindex(index-2)

        }
        else
        {
            setindex(index-1)
        }
       
    }

  return (
    <div>
      <input type="text" onChange={changeImage} />
      <hr />
      <button onClick={previousImage}>Previous</button>
      {/* <img src={render?href:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} height={300} width={300} alt="" /> */}
      <img src={href} height={300} width={300} alt="" />
        
        <button onClick={nextImage}>Next</button>
    </div>
    
  )
}

export default CourouselApi
