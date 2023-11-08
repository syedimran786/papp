import axios from 'axios';
import React, { useEffect, useState } from 'react'


// let useDebounce=(value, delay = 500)=>
// {
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(() => {

//         const id = setTimeout(() => {
//             setDebouncedValue(value)
//         }, delay)

//         return () => {
//             clearTimeout(id)
//         }
//     }, [value, delay])

//     return debouncedValue
// }

function SearchApi() {
    let [data,setData]=useState({})
    let [error,seterror]=useState(false)
    let [loading,setloading]=useState(false);

    let [search,setSearch]=useState("");


    function debounce(cb,delay=500)
    {
        let stopApi;
        return (...args)=>
        {
        clearTimeout(stopApi)

            stopApi=setTimeout(()=>
            {
                cb(...args)
            },delay)
        }
    }

    let getUser=async ({target:{value}})=>
    {
        
        try
        {
            
            let user=await axios.get(`https://api.github.com/users/${value}`)
            user=user.data;
            setData(user);
            setloading(false)
            seterror(false)
        } 
        catch(err)
        {
            setloading(false)
            seterror(true)
        }     
    }
    

 


    // let changeSearch=({target:{value}})=>
    // {
    //     setSearch(value)
    // }

  return (
    <div>
      {loading && <h1>Loading......</h1>}
      {error && <h1>Error in fetching Api</h1>}
<hr />
<input type="text" placeholder='Search'  onChange={debounce(getUser)}/>
      {!loading && <li>{data.login} <img src={data.avatar_url} alt="" /></li>}
    </div>
  )
}

export default SearchApi
