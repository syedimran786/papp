import React from 'react'
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchUsers, fetchusersuccess } from './usersActions';

function Users() {


let users=useSelector(state=>
    {
        return state.userReducer.users
    })

    let dispatch=useDispatch()

useEffect(()=>
{
    dispatch(fetchUsers())
},[])

console.log(users)
  return (
    <div>{users.map(user=>
        {
            return <li key={user.id}>{user.name}</li>
        })}</div>
  )
}



export default Users



    //! using old concepts not required

// function Users({getUsers,usersdata}) {
    //! props={usersdata:{loading:false,users:[],error:""},getUsers:structure of fetchUsers}
    
    // let users=useSelector(state=>
    //     {
    //         return state.userReducer
    //     })
    
    //     let dispatch=useDispatch()
    
    // useEffect(()=>
    // {
    //    getUsers()
    // },[])

    // console.log(usersdata)
    //   return (
    //     <div>{usersdata.users.map(user=>
    //         {
    //             return <li key={user.id}>{user.name}</li>
    //         })}</div>
    //   )
    // }
    
    // let mapstatetoprops=(state)=>
    // {
    //     console.log(state)
    //     return {usersdata:state.userReducer}
    // }
    
    // let mapdispatchtoprops=(dispatch)=>
    // {
    //     return {getUsers:()=>dispatch(fetchUsers())}
    // }
    // export default connect(mapstatetoprops,mapdispatchtoprops)(Users)