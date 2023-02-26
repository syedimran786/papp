import React from 'react'
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchUsers, fetchusersuccess } from './usersActions';

function Users({getUsers,usersdata}) {
//! props={usersdata:{loading:false,users:[],error:""},getUsers:structure of fetchUsers}

useEffect(()=>
{
    getUsers()
},[])
console.log(usersdata)
  return (
    <div>{usersdata.users.map(user=>
        {
            return <li key={user.id}>{user.name}</li>
        })}</div>
  )
}



let mapstatetoprops=(state)=>
{
    console.log(state)
    return {usersdata:state.userReducer}
}

let mapdispatchtoprops=(dispatch)=>
{
    return {getUsers:()=>dispatch(fetchUsers())}
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Users)

