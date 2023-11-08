import React, { useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

function Hero({data}) {
    let [sdata,setSdata]=useState({sn:"",a:""});
    let {showBoundary}=useErrorBoundary()

   let changeSdata=()=>
    {
       try
       {
        setSdata({...setSdata,sn:data.sname,a:data.age})
       }
        catch(err)
        {
            showBoundary()
        }
    }
  return (
    <div>
        <h1>{sdata.sn} {sdata.a}</h1>
        <button onClick={changeSdata}>click</button>
    </div>
  )
}

export default Hero
