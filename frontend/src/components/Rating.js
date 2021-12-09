import React from 'react'

export default function Rating(props) {
    const { rating, numReviews } = props;

    return (
        <div className="rating">
            <span>
                <i className={rating >= 1 || rating === null ? "fa fa-star" : 'far fa-star'}></i>
            </span>
            <span>
                <i className={rating >= 2 ? "fa fa-star" : 'far fa-star'}></i>
            </span>
            <span>
                <i className={rating >= 3 ? "fa fa-star" : 'far fa-star'}></i>
            </span>
            <span>
                <i className={rating >= 4 ? "fa fa-star" : 'far fa-star'}></i>
            </span>
            <span>
                <i className={rating >= 4.5 ? "fa fa-star" : 'far fa-star'}></i>
            </span>
            <span>
                {numReviews + ' reviews'}
            </span>
        </div>
    )
}
