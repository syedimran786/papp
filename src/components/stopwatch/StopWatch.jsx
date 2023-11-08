// import React, { useRef, useState } from 'react'


// function StopWatch() {

//     let [timer,setTimer]=useState(0);


//     let [now,setNow]=useState(0);


//     let interval=useRef(null);

// let startTimer=()=>
// {
//     setTimer(Date.now())
//     setNow(Date.now())
//     interval.current=setInterval(()=>
//     {
//         setTimer(Date.now())  
//     },50)
// }


// let stopwatch=((timer-now)/1000).toFixed(2)


// let stopTimer=()=>
// {
//     clearInterval(interval.current)
// }

//   return (
//     <div>
//       <h1>StopWatch:{stopwatch}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   )
// }

// export default StopWatch


//! good format


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function StopWatch() {
  const [time, setTime] = useState(0);
const [running, setRunning] = useState(false);

useEffect(() => {
  let interval;

  if (running) {
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  } else if (!running) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [running]);

return (
  <div className="stopwatch">
    <div className="numbers">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
    <div className="buttons">
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  </div>
);
}

export default StopWatch

//https://w3collective.com/react-stopwatch/