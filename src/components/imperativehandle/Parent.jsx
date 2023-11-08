import React, { useRef } from 'react'
import Child from './Child'

function Parent() {

    let ref=useRef()
    
  return (
    <div>
        <Child ref={ref}/>
        <button onClick={()=>{ ref.current.childFunction()}}>
            Button on parent
        </button>
    </div>
  )
}

export default Parent
