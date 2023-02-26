
//! using connect()
import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './cakeActions'

function CakeShop(props) {
    console.log(props);
  return (
    <div>
        <h1>Total Cakes: {props.totalCakes.numberOfCakes}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}



let mapStateToProps=(state)=>
{
 //! state.cakeReducer gives {numberOfCakes:10}
    return {totalCakes:state.cakeReducer}
}
let mapDispatchToProps=(dispatch)=>
{
  
    return {buyCake:()=>dispatch(buyCake())}
}


export default connect(mapStateToProps,mapDispatchToProps) (CakeShop)

//?-----------------------------------------------------------------

//! using hooks
// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux';
// import { buyCake } from './cakeActions'

// function CakeShop() {
//    let Cake=useSelector(state=>state);
//    let dispatch=useDispatch()
//   return (
//     <div>
//         <h1>Total Cakes: {Cake.cakeReducer.totalCakes}</h1>
//         <button onClick={()=>(dispatch(buyCake()))}>Buy Cake</button>
//     </div>
//   )
// }




// export default CakeShop