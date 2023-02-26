let intialstate={count:0}
export let counterReducer=(state=intialstate,action)=>
{

    switch(action.type)
    {
        case "INCREMENT":return {...state,count:state.count+1};
        case "DECREMENT":return {...state,count:state.count-1};
        default:return state;
    }
    
}