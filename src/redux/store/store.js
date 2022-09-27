import { compose, createStore } from 'redux';
import { rootReducers } from '../reducers/combineReducers'

// const composeEnhancers =
//     typeof window === 'object' && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
//         ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({})
//         : compose

// const enhancer = composeEnhancers()
export const store = createStore(rootReducers)