import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../constants/productConstants"
import Axios from 'axios'

export const listProducst = () => async (dispatch) => {
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