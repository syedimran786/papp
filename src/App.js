// import './App.css';
// import CakeShop from './my redux/cake shop/CakeShop';
// import IcecreamShop from './my redux/icecream shop/IcecreamShop';

// function App() {
//   return (
//     <div className="App">
//     {/* <ReduxCounter/> */}
//     <IcecreamShop/>
//     <hr/>
//     <CakeShop/>
//     </div>
//   );
// }

// export default App;

//! Portal
import React from 'react'
import Parent from './components/imperativehandle/Parent'
import Portal from './components/Portal/Portal'
import ConverterData from './components/memoization/ConverterData'
import ErrorParent from './components/errorboundaries/ErrorParent'
import SearchApi from './components/debounce and throttle/SearchApi'
import StopWatch from './components/stopwatch/StopWatch'
import ToursMain from './components/Tours/ToursMain'
import CourouselApi from './components/carousel/CourouselApi'
import SetStateSynchonous from './components/SetStateSynchonous.jsx'

function App() {
  return (
    <div>
      {/* <StopWatch/> */}
      {/* <ToursMain/> */}
      {/* <CourouselApi/> */}
      <SetStateSynchonous/>
    </div>
  )
}

export default App
