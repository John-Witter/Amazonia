import { REVIEW_CREATE_FAIL, REVIEW_CREATE_REQUEST, REVIEW_CREATE_SUCCESS, REVIEW_LIST_FAIL, REVIEW_LIST_REQUEST, REVIEW_LIST_SUCCESS, REVIEW_ONE_FAIL, REVIEW_ONE_REQUEST, REVIEW_ONE_SUCCESS } from "../constants/reviewConstants";

export const reviewListReducer = (state = { loading: true, reviews: [] }, action) => {
    switch(action.type) {
        case REVIEW_LIST_REQUEST:
            return {loading: true};
        case REVIEW_LIST_SUCCESS:
            return {loading: false, reviews: action.payload };
        case REVIEW_LIST_FAIL:
            return {loading:false, error: action.payload };
        default:
            return state;
    }
}

export const oneReviewReducer = (state = { loading: true, review: {} }, action) => {
    switch(action.type) {
        case REVIEW_ONE_REQUEST:
            return {loading: true};
        case REVIEW_ONE_SUCCESS:
            return {loading: false, review: action.payload };
        case REVIEW_ONE_FAIL:
            return {loading:false, error: action.payload };
        default:
            return state;
    }
}


export const addReviewReducer = (state = { loading: true, reviews: [] }, action) => {
    switch(action.type) {
        case REVIEW_CREATE_REQUEST:
            return {loading: true};
        case REVIEW_CREATE_SUCCESS:
            return {loading: false, reviews: action.payload };
        case REVIEW_CREATE_FAIL:
            return {loading:false, error: action.payload };
        default:
            return state;
    }
}
