import { PRODUCTS_LIST_REQUEST } from "../constants/productConstants"

export const listProducst = () => async (dispatch) => {
    dispatch({
        type: PRODUCTS_LIST_REQUEST
    })
    try{

    } catch(error){}
    
}