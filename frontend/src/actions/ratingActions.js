import Axios from 'axios';
import {
    RATING_ONE_REQUEST,
    RATING_ONE_SUCCESS,
    RATING_ONE_FAIL,
} from "../constants/ratingConstants";

// get the avg of all ratings for a specific request
export const listAverageRating = (productId) => async (dispatch) => {
        dispatch({
            type: RATING_ONE_REQUEST,
            payload: productId,
        });

        try {
            const { data } = await Axios.get(
                `/api/products/${productId}/ratings`
            );
            dispatch({ type: RATING_ONE_SUCCESS, payload: data });
        } catch (error) {
            //dispatching fail scenario
            dispatch({ type: RATING_ONE_FAIL, payload: error.message });
        }
}