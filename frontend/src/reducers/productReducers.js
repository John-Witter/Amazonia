import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_FAIL1, PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST1, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_SUCCESS1 } from "../constants/productConstants";

export const productListReducer = (state = { loading: true, products: [] }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload };
        default:
            return state;
    }
}

export const featuredProductsReducer = (state = { loading: true, productsFeatured: [] }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST1:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS1:
            return {loading: false, productsFeatured: action.payload };
        case PRODUCT_LIST_FAIL1:
            return {loading:false, error: action.payload };
        default:
            return state;
    }
}


export const productDetailsReducer = (state = {product: {}, loading: true }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
