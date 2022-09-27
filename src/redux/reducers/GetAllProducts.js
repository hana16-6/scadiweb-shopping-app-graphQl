import { CURRENCY } from "../../constants/currency";
export const initialState = {
    products: [],
    currentCurrency: JSON.parse(localStorage.getItem("currency")) || CURRENCY[0],
};
// export const GetAllProducts = (state = initialState, action) => {
//     switch (action.type) {
//         case "All_CART_PRODUCTS":
//             const newArr = action.payload.products.map((prod) =>
//                 prod.attributes.length > 0
//                     ? {
//                         ...prod,
//                         attributes:
//                             prod.attributes.map((attr, i) => ({ ...attr, selected: attr.items[0].id })
//                             ),
//                     }
//                     : prod
//             )
//             return {
//                 ...state,
//                 products: newArr,
//             };
//         case "ACTIVE_ATTRIBUTES":
//             const Arr = state.products.map((prod) =>
//                 prod.attributes.length > 0
//                     ? {
//                         ...prod,
//                         attributes:
//                             prod.attributes.map((attr, i) =>
//                                 attr ? { ...attr, selected: action.payload.id } : attr
//                             ),
//                     }
//                     : prod
//             )
//             console.log(Arr, "newArr")
//             console.log(action.payload, "action.payload.id")
//             return {
//                 ...state,
//                 products: Arr,
//             };
//         default:
//             return state;
//     }
// };

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


