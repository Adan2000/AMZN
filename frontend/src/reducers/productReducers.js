const {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
} = require('../constants/productConstants')

const productListReducer = (state, action) => {
    switch(action.type){
    case PRODUCTS_LIST_REQUEST:
        return { loading: true };
    case PRODUCTS_LIST_SUCCESS:
            return { loading: false, products: action.payload }
    default: 
        return state;
    }
}
