import data from './data'
import { createStore } from 'redux'

const initialState = {}
const reducer = (state, action) => {
    return {products: data.products}
}

const store = createStore(reducer, initialState, compose(applyMiddleware(think)));

export default store;