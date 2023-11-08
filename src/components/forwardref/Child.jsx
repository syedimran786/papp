import React, { forwardRef } from 'react'

function Child(props,ref) {

  
  return (
    <div>
      <input type="text"  ref={ref}/>
    </div>
  )
}

export default forwardRef(Child)
