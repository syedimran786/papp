

let reducer = (state, action) => {

    switch (action.type) {
        case "CLEAR_CART": return { ...state, carts: [] };

        case "REMOVE_ITEM": let newCartItems = state.carts.filter((c) => {
            return c.id !== action.payload
        });
            return { ...state, carts: newCartItems };

        case "INCREASE_ITEM": let incCartItems = state.carts.map((citem) => {
            if (citem.id === action.payload) {
                return { ...citem, amount: citem.amount + 1 }
            }
            return citem
        });
            return { ...state, carts: incCartItems };

            case "DECREASE_ITEM": let decCartItems = state.carts.map((citem) => {
                if (citem.id === action.payload) {
                    
                    return { ...citem, amount: citem.amount - 1 }
                    
                }
                return citem
            }).filter((citem)=>citem.amount!==0);
            console.log(decCartItems);

                return { ...state, carts: decCartItems };
            case "GET_TOTALS":let getTotals=state.carts.reduce((cartTotal,cartItem)=>
            {
                let {amount,price}=cartItem;

                let itemTotal=price*amount;

                cartTotal.totalAmount+=itemTotal
                cartTotal.TotalItems+=amount

                return cartTotal
            },{totalAmount:0,TotalItems:0});
            let {totalAmount,TotalItems}=getTotals

            return {...state,totalAmount,TotalItems}
            case "LOADING":return {...state,loading:true};
            case "FETCH_SUCCESS":return {...state,carts:action.payload,loading:false}
        default: return state
    }

}

export default reducer