import React from 'react'

function Converter({cdata:{USD,INR},inrToUsd}) {

    console.log({USD,INR})
    console.log("Converter")
  return (
    <div>
        {/* <h1>{USD} to {INR}</h1> */}
    <section>{inrToUsd()}</section>
    </div>
  )
}

//!use below code when not using useMemo();
// export default React.memo(Converter,(pp,np)=>
// {
//     return pp.cdata.USD===np.cdata.USD && pp.cdata.USD===np.cdata.USD
// })


export default React.memo(Converter)