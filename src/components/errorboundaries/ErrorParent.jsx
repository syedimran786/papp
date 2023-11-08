import React from 'react'
import Hero from './Hero'
// import ErrorBoundary from './ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary'

function ErrorParent() {

  //! works like componentdidCatch() of class component
  let dispError=(error, errorInfo)=>
  {
      console.log(error, errorInfo)
  }
  return (
    <div>
      {/* //! using class components */}
        {/* <ErrorBoundary>
            <Hero data={{sname:"syed",age:24}}/>
            <Hero data={{sname:"Imran",age:34}}/>
            <Hero/>
        </ErrorBoundary>
       */}

        <ErrorBoundary fallback={<h1 style={{color:"green"}}>Ooops Something Went Wrong!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>} onError={dispError}>
            <Hero data={{sname:"syed",age:24}}/>
            <Hero data={{sname:"Imran",age:34}}/>
            <Hero/>
        </ErrorBoundary>

    </div>
  )
}

export default ErrorParent
