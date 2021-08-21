import { PRODUCTS_LIST_REQUEST } from "../constants/productConstants"
import Axios from 'axios'

export const listProducst = () => async (dispatch) => {
    dispatch({
        type: PRODUCTS_LIST_REQUEST
    })
    try{
        const { data } = await Axios.get("/api/products");
    } catch(error){

    }

}