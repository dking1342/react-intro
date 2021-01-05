
const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'CLEAR_CART':
            state = {...state, cart:[], amount:0, total:0}
            break;
        case 'REMOVE':
            let filteredCart = state.cart;
            filteredCart = filteredCart.filter((item)=> item.id !== payload)
            state = {...state, cart: filteredCart }
            break;
        case 'INCREASE':
            let newCartInc = state.cart.map((item)=> {
                if(item.id === payload){
                    return {...item, amount: item.amount + 1}
                }
                return item
            })

            state = { ...state, cart: newCartInc }
            break;
        case 'DECREASE':
            let newCartDec = state.cart
                .map((item)=> {
                    if(item.id === payload){
                        return {...item, amount: item.amount - 1 }
                    }
                    return item
                })
                .filter(item=> item.amount !== 0 );
            state = { ...state, cart: newCartDec }
            break;
        case 'TOGGLE_AMOUNT':
            const { id, direction } = payload;

            let newCart = state.cart.map((item)=> {
                if(item.id === id){
                    if(direction === 'increase'){
                        return {...item, amount: item.amount + 1}
                    } else {
                        return {...item, amount: item.amount - 1 }
                    }
                }
                return item
            })
            .filter(item=> item.amount !== 0 );

            state = { ...state, cart: newCart }    
        case 'GET_TOTALS':
            return tally(state, state.cart);
        case 'LOADING':
            state = {...state, loading:true}
            break;
        case 'DISPLAY_ITEMS':
            return tally(state, payload);
        default:
            break;
    }
    return state
}

const tally =(state, payload)=>{
    let { total, amount } = payload.reduce((acc,item)=>{
        const { price, amount } = item;
        acc.total += price * amount;
        acc.amount += amount;
        return acc
    },{
        total:0,
        amount:0
    })
    total = parseFloat(total.toFixed(2));

    return {...state, cart: payload, total, amount, loading:false};

}

export default reducer;