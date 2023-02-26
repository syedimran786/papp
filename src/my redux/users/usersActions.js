import axios from "axios"
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./userTypes"

let fetchuserreuest=()=>
{
    return {type:FETCH_REQUEST}
}

let fetchusersuccess=(user)=>
{
    return {type:FETCH_SUCCESS,payload:user}
}

let fetchuserfailure=(error)=>
{
    return {type:FETCH_ERROR,payload:error}
}

let fetchUsers=()=>
{
    return (dispatch)=>
    {
        dispatch(fetchuserreuest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(user=>
            {
                dispatch(fetchusersuccess(user.data))
            })
            .catch(err=>
                {
                    dispatch(fetchuserfailure(err.message))
                })
    }
}

export {fetchuserreuest,fetchusersuccess,fetchuserfailure,fetchUsers}