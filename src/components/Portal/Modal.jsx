import React from 'react'

function Modal({hideModel}) {
  return (
    <div style={{background:"lightblue",width:"200px",padding:"20px",boxShadow:"2px 2px 2px black"}}>
      <h1>I a Modal</h1>
      <button onClick={hideModel}>Close</button>
    </div>
  )
}

export default Modal
