import data from './data'
const initialState = {}
const reducer = (state, action) => {
    return {products: data.products}
}

const store = createStore()