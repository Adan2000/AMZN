import { PRODUCTS_LIST_REQUEST } from "../constants/productConstants";

const productListReducer = (state, reducer) => {
    switch(action.type){
    case PRODUCTS_LIST_REQUEST:
        return {loading: true}
        default: 
        return state;
    }
}
