import { CURRENCY } from "../../constants/currency";
export const initialState = {
    products: [],
    currentCurrency: JSON.parse(localStorage.getItem("currency")) || CURRENCY[0],
};
export const GetAllProducts = (state = initialState, action) => {
    switch (action.type) {
        case "All_CART_PRODUCTS":
            return {
                ...state,
                products: action.payload.products,
            };
        default:
            return state;
    }
};

export const Changecurrency = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CURRENCY":
            localStorage.setItem(
                "currency",
                JSON.stringify(action.payload.currentCurrency)
            );
            return {
                ...state,
                currentCurrency: action.payload.currentCurrency,
            };
        default:
            return state;
    }
};


