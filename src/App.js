//! my redux

import './App.css';
import CakeShop from './my redux/cake shop/CakeShop';
import IcecreamShop from './my redux/icecream shop/IcecreamShop';
import Users from './my redux/users/Users';

function App() {
  return (
    <div className="App">
    {/* <ReduxCounter/> */}
    {/* <IcecreamShop/> */}
    <hr/>
    {/* <CakeShop/> */}

    <Users/>
    </div>
  );
}

export default App;

//! reactjs carts 
// import React from 'react'
// import CartContainer from './components/cart/CartContainer'
// import Navbar from './components/cart/Navbar'

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <CartContainer/>
//     </div>
//   )
// }

// export default App

// //! json server crud

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import AddProducts from './components/crud with json server/AddProducts'
// import CrudNavbar from './components/crud with json server/CrudNavbar'
// import Home from './components/crud with json server/Home'
// import Products from './components/crud with json server/Products'
// import UpdateProductName from './components/crud with json server/UpdateProductName'
// import UpdateProducts from './components/crud with json server/UpdateProducts'

// function App() 
// {
//   return (
//     <BrowserRouter>
//     <CrudNavbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='getProducts' element={<Products/>}/>
//         <Route path='updateProducts/:pid' element={<UpdateProducts/>}/>
//         <Route path='addProducts' element={<AddProducts/>}/>
//         <Route path='updateproductName' element={<UpdateProductName/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//! Cocktail api

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import CocktailNavbar from './components/cocktail/CocktailNavbar'
// import Home from './components/cocktail/Home'
// import SingleCocktail from './components/cocktail/SingleCocktail'

// function App() {
//   return (
//     <BrowserRouter>
//     <CocktailNavbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='cocktail/:id' element={<SingleCocktail/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App