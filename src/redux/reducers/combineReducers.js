import { combineReducers } from 'redux';
import { IncrementCartCount } from './IncrementCartCount'
import { GetAllProducts, Changecurrency } from './GetAllProducts'
import { AddToCart } from './AddToCart'

export const rootReducers = combineReducers({
    IncrementCartCount,
    GetAllProducts,
    AddToCart,
    Changecurrency,


})