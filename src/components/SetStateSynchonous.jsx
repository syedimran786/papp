import React, { useEffect, useState } from 'react'

function SetStateSynchonous() {

    let [count,setCount]=useState(0);
    function handleClick()
    {
    //    if(count!==5)
    //    {
    //     setCount(count+1);
    //     console.log(count)
    //    }
    // console.log("start")
    setCount(count+1);
    //! you can recieve previuosly updated value inside another setState() through callback
    setCount((count)=>
    {
        //! give previously updated value
        console.log(count)
        console.log("setState");
        return count + 1;
    });
//    console.log("end")

    //! if you pass setState() without callback it updates only once here inside for loop if you want setState() to executes all the time pass callback to setState()
    // for(let i=1;i<=5;i++)
    // {
    //     setCount((p=>p+1));
    //     console.log(count)
    // }
    }


    //! by using useeffect you can get the state value immidietly
    useEffect(()=>
    {
        // console.log(count)
    },[count])
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default SetStateSynchonous
