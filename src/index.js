import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppProvider from './components/cart/AppProvider';
import AppProvider from './components/cocktail/AppProvider';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux';

import { store } from './my redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.subscribe(()=>{})
// console.log(store.getState())
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//! cart and cocktail 



// const root = ReactDOM.createRoot(document.getElementById('root'));

//   root.render(
//     <AppProvider>
//       <App />
//     </AppProvider>
//   )




//! rest all without redux



// const root = ReactDOM.createRoot(document.getElementById('root'));

//   root.render(

//       <App />

//   )

