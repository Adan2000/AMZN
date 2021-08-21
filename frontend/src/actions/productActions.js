import { PRODUCTS_LIST_REQUEST } from "../constants/productConstants"

export const listProducst = () => async (dispatch) => {
    dispatch({
        type: PRODUCTS_LIST_REQUEST
    })
    try{
        const { data } = await axios.get("/api/products");
    } catch(error){

    }

}