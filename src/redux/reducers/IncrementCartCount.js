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
            console.log(state, "lolo")
            return {
                ...state,
                cartCounter: state.cartCounter - 1
            }
        default:
            return state
    }
}





