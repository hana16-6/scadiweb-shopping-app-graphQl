const initialState = {
    cartCounter: 0,
}

export const IncrementCartCount = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_CART_COUNTER":
            return {
                ...state,
                cartCounter: state.cartCounter + 1
            }
        case "DECREMENT_CART_COUNTER":
            return {
                ...state,
                cartCounter: state.cartCounter - 1
            }
        case "INCREMENT_COUNTER_FROM_CART":
            return {
                ...state,
                cartCounter: state.cartCounter - action.payload.itemCounter
            }
        default:
            return state
    }
}





