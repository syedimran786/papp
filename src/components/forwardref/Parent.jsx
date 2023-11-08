import React, { useRef } from 'react'
import Child from './Child'

function Parent() {

    let ref=useRef()

    let focusBox=()=>
    {
        ref.current.focus()
    }
  return (
    <div>
        <Child ref={ref}/>
        <button onClick={focusBox}>Button on parent</button>
    </div>
  )
}

export default Parent
