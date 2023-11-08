import React, { useCallback, useMemo, useState } from 'react'
import Converter from './Converter'

let initstate={INR:"",USD:""}
function ConverterData() {


    let [fdata,setFdata]=useState(initstate)
    let [cdata,setCdata]=useState(initstate)

    let memoObj=useMemo(()=>
    {
        return cdata
    }, [cdata.USD,cdata.INR])

    let changeCurrency=({target:{value,name}})=>
    {
        setFdata({...fdata,[name]:value})
    }

    let inrToUsd=useCallback(()=>
    {
        if(cdata.INR!==0)
        {
            cdata.USD=cdata.INR/cdata.USD;
            // setCdata({...cdata,USD:cdata.USD})
            return <h1>{`${cdata.INR} rupees is equal to ${cdata.USD} dollars`}</h1>
        }   
    }, [cdata.USD,cdata.INR])
    let convertCurrency=()=>
    {
        setCdata({...fdata})
    }
    console.log("Converter Data")

  return (
    <div>
        {/* //!use below code when not using useMemo(); */}
        {/* <Converter cdata={cdata}/> */}



      <input type="text" name="INR" onChange={changeCurrency} placeholder='Rupee'/>
      <hr />
      <input type="text" name="USD" onChange={changeCurrency} placeholder='Dollar'/> <hr />
    
        <button onClick={convertCurrency}>Covert</button>

        <Converter cdata={memoObj} inrToUsd={inrToUsd}/>

    </div>
  )
}

export default ConverterData
