import Axios from "axios";
import { REVIEW_CREATE_FAIL, REVIEW_CREATE_REQUEST, REVIEW_CREATE_SUCCESS, REVIEW_LIST_FAIL, REVIEW_LIST_REQUEST, REVIEW_LIST_SUCCESS, REVIEW_ONE_FAIL, REVIEW_ONE_REQUEST, REVIEW_ONE_SUCCESS } from "../constants/reviewConstants";
import { csrfFetch } from "../reducers/csrf";

//define first action function
export const listReviews = (productId) => async (dispatch) => {
    dispatch({
        type: REVIEW_LIST_REQUEST,
        payload: productId
    });

    try {
        const { data } = await Axios.get(`/api/products/${productId}/reviews`);
        dispatch({ type: REVIEW_LIST_SUCCESS, payload: data })
    } catch (error) {
        //dispatching fail scenario
        dispatch({ type: REVIEW_LIST_FAIL, payload: error.message })
    }
}


export const createReview = (userId, productId, review) => async (dispatch) => {
    dispatch({
        type: REVIEW_CREATE_REQUEST,
        payload: {userId, productId, review}
    });

    try {
        // const { data } = await Axios.get(`/api/products/${productId}/review`);
        const response = await csrfFetch(`/api/products/${productId}/review`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                productId,
                review,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        });
        const res = await response.json();
        dispatch({ type: REVIEW_CREATE_SUCCESS, payload: res })
    } catch (error) {
        //dispatching fail scenario
        dispatch({ type: REVIEW_CREATE_FAIL, payload: error.message })
    }
}

export const myReview = (productId) => async(dispatch) => {
    dispatch({ type: REVIEW_ONE_REQUEST, payload: productId });

    try {
        const { data } = await Axios.get(`/api/products/${productId}/review`)
        dispatch({ type: REVIEW_ONE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: REVIEW_ONE_FAIL, payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};
