import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listAverageRating } from '../actions/ratingActions';
import Rating from '../components/Rating'
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

export default function Product(props) {
    const { product } = props;
    const productList = useSelector(state => state.productList);
    const dispatch = useDispatch();
    const { loading, error, products } = productList;
    const id = product.id
    useEffect(() => {
        dispatch(listAverageRating(id))
    }, [dispatch])
    const rating = useSelector(state => state.rating)

    return (
        <div key={product.id} className="card">
            <Link to={`/product/${product.id}`}>
                <img className="mediumImg" src={product.image} alt={product.name} />
            </Link>
            <div className="card-bodyy">
                <Link to={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                </Link>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        <Rating rating={rating.averageRating } numReviews={product.numReviews}></Rating>
                    </>
                )
            }
                <div className="price">Price: ${product.price}</div>
            </div>
        </div>
    )
}
