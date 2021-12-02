
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { featuredProductsReducer, productDetailsReducer, productListReducer } from './reducers/productReducers';
import { oneReviewReducer, reviewListReducer } from './reducers/reviewReducer';
import sessionReducer from './reducers/userReducer';
import usersReducer from './reducers/users';
import { oneRatingReducer } from './reducers/ratingReducer';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    },
};
const reducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    productList: productListReducer,
    featuredProducts: featuredProductsReducer,
    productDetails: productDetailsReducer,
    reviewList: reviewListReducer,
    oneReview: oneReviewReducer,
    cart: cartReducer,
    rating: oneRatingReducer
})

//this line allows use to connect our redux store to the devtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;
