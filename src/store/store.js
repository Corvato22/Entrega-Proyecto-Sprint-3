import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { poductsReducer } from '../reducers/poductsReducer';

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    product: poductsReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)