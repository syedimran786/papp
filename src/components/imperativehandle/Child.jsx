import React, { forwardRef, useImperativeHandle } from 'react'

function Child(props,ref) {

    let childFunction=()=>
    {
        console.log("I am Child")
    }

    useImperativeHandle(ref,()=>{
        return {childFunction}
    },[])
  
  return (
    <div>
      
    </div>
  )
}

export default forwardRef(Child)
