import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasrError:false
      }
    }

    static getDerivedStateFromError(error)
    {
        return {
            hasrError:true
        }
    }

    componentDidCatch(error, errorInfo)
    {
        console.log(error, errorInfo)
    }
    
  render() {
    
    if(this.state.hasrError)
    {
        return <h1 style={{color:"red"}}>Ooops Something Went Wrong!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
    }

    return this.props.children
  }
}
