import { 
    PRODUCTS_LIST_FAIL, 
    PRODUCTS_LIST_REQUEST, 
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_DETAILS_REQUEST
} from "../constants/productConstants"
import Axios from 'axios'

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCTS_LIST_REQUEST
    })
    try{
        const { data } = await Axios.get("/api/products");
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: PRODUCTS_LIST_FAIL, payload: error.message})
    }
}

export const detailsProduct = (productId) => async(dispatch) => {

}