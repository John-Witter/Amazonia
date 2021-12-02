import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_FAIL1, PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST1, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_SUCCESS1 } from "../constants/productConstants"
import Axios from "axios";

//define first action function
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        //dispatching fail scenario
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}


export const featuredProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST1
    });

    try {
        const { data } = await Axios.get('/api/products/featured');
        dispatch({ type: PRODUCT_LIST_SUCCESS1, payload: data })
    } catch (error) {
        //dispatching fail scenario
        dispatch({ type: PRODUCT_LIST_FAIL1, payload: error.message })
    }
}


export const detailsProduct = (productId) => async(dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });

    try {
        const { data } = await Axios.get(`/api/products/${productId}`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};
