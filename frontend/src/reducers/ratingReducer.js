import {
    RATING_ONE_REQUEST,
    RATING_ONE_SUCCESS,
    RATING_ONE_FAIL,
} from "../constants/ratingConstants";

export const oneRatingReducer = (
    state = { loading: true, averageRating: {} },
    action
) => {
    switch (action.type) {
        case RATING_ONE_REQUEST:
            return { loading: true };
        case RATING_ONE_SUCCESS:
            return { loading: false, averageRating: action.payload };
        case RATING_ONE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
