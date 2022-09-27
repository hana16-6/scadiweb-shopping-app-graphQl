const initialState = {
    cartList: [],
};

export const AddToCart = (state = initialState, action) => {
    switch (action.type) {
        // case "ADD_TO_CART":
        //     const cartListFilter = state.cartList.filter(
        //         (item) => item.id === action.payload.cartList.id
        //     );
        //     const newArr =
        //         cartListFilter.length === 1
        //             ? state.cartList.map((item) =>
        //                 item.id === action.payload.cartList.id
        //                     ? { ...item, itemCount: item.itemCount + 1 }
        //                     : item
        //             )
        //             : [...state.cartList, action.payload.cartList];
        //     return {
        //         ...state,
        //         cartList: newArr,
        //     };

        case "ADD_TO_CART":
            return {
                ...state,
                cartList: [...state.cartList, action.payload.cartList],
            };
        case "DELETE_FROM_CART":
            return {
                ...state,
                cartList: action.payload.filterdProducts
            };

        case "INCREMENT_ITEM_COUNT":
            const cartItemCount = state.cartList.filter(
                (item) => item.id === action.payload.cartProd.id && item.attributes.every((selec, i) => {
                    return selec.selected === action.payload.cartProd.attributes[i].selected;
                })
            );
            console.log(state.cartList, "test")
            const Arr =
                cartItemCount.length === 1
                    ? state.cartList.map((item) =>
                        item.id === action.payload.cartProd.id && item.attributes.every((selec, i) => {
                            return selec.selected === action.payload.cartProd.attributes[i].selected;
                        })
                            ? { ...item, itemCount: item.itemCount + 1 }
                            : item
                    )
                    : ""
            return {
                ...state,
                cartList: Arr,
            };

        case "DECREMENT_ITEM_COUNT":
            const cartItemsCount = state.cartList.filter(
                (item) => item.id === action.payload.cartProd.id && item.attributes.every((selec, i) => {
                    return selec.selected === action.payload.cartProd.attributes[i].selected;
                })
            );
            const newArray =
                cartItemsCount.length === 1
                    ? state.cartList.map((item) =>
                        item.id === action.payload.cartProd.id && item.itemCount > 1 & item.attributes.every((selec, i) => {
                            return selec.selected === action.payload.cartProd.attributes[i].selected;
                        })
                            ? { ...item, itemCount: item.itemCount - 1 }
                            : item
                    )
                    : ""
            return {
                ...state,
                cartList: newArray,
            };
        case "ACTIVE_ATTRIBUTES":
            const activeAttr =
                state.cartList.length > 0
                    ? state.cartList.map((item) =>
                        item.id === action.payload.prod.id
                            ? {
                                ...item,
                                attributes: item.attributes.map((attr, i) =>
                                    attr && attr.id === action.payload.attrId ? { ...attr, selected: action.payload.id } : attr
                                ),
                            }
                            : item
                    )
                    : [...state.cartList, action.payload.prod];
            return {
                ...state,
                cartList: activeAttr,
            };
        default:
            return state;
    }
};

// export const AddToCart = (state = initialState, action) => {

//     switch (action.type) {
//         case "ADD_TO_CART":
//             const newArr = state.cartList.length > 0 ? state.cartList.map(item => item.id === action.payload.cartList.id ? { ...item, itemCount: item.itemCount + 1 } : item) : [...state.cartList, action.payload.cartList]
//             return {
//                 ...state,
//                 cartList: newArr
//             }
//         default:
//             return state
//     }
// }
