import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating'

export default function Product(props) {
    const { product } = props;
    return (
        <div key={product.id} className="card">
            <Link to={`/product/${product.id}`}>
                <img className="mediumImg" src={product.image} alt={product.name} />
            </Link>
            <div className="card-bodyy">
                <Link to={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <Rating rating={Math.random() * 5} numReviews={product.numReviews}></Rating>
                <div className="price">Price: ${product.price}</div>
            </div>
        </div>
    )
}
