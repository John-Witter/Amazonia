import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listAverageRating } from '../actions/ratingActions';
import Rating from '../components/Rating'

export default function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();
    const rating = useSelector(state => state.rating)
    const { averageRating } = rating;

    useEffect(() => {
        dispatch(listAverageRating(product.id))
    }, [dispatch, product])

    return (
        <div key={product.id} className="card">
            <Link to={`/product/${product.id}`}>
                <img className="mediumImg" src={product.image} alt={product.name} />
            </Link>
            <div className="card-bodyy">
                <Link to={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <Rating rating={averageRating == null ? 0 : averageRating } numReviews={product.numReviews}></Rating>
                <div className="price">Price: ${product.price}</div>
            </div>
        </div>
    )
}
