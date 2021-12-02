import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { detailsProduct } from '../actions/productActions';
import { createReview, listReviews, myReview } from '../actions/reviewActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { getAllUsers } from '../reducers/users';

export default function ProductScreen(props) {

    //compares and finds the product that matches url id
    const productDetails = useSelector(state => state.productDetails);
    const reviewsList = useSelector(state => state.reviewList);
    const usersReview = useSelector(state => state.oneReview)
    const [qty, setQty] = useState(1)
    const [state, setState] = useState(false)
    const user = useSelector(state => state.users);
    const currentUser = useSelector(state => state.session.user)
    const [reviewText, setReviewText] = useState("")

    const { loading, error, product } = productDetails;
    const { reviews } = reviewsList;
    const { review } = usersReview;

    const dispatch = useDispatch();
    const productId = props.match.params.id;

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(myReview(productId))
        dispatch(detailsProduct(productId));
        dispatch(listReviews(productId))

        if (!reviews.length) {
            setState(false)
        }
    }, [dispatch, productId])

    const createRev = async (e) => {
        e.preventDefault();
        dispatch(createReview(currentUser.id, productId, reviewText))
        dispatch(myReview(productId))
        dispatch(listReviews(productId))
        setState(false)
    }

    const addToCartHandler = () => {
        //changes the rows in react application
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    const changeReview = (e) => {
        e.preventDefault();
        setReviewText(e.target.value)
    }


    return (
        <div className="grid-container2">
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <>
                    <div className="showcase" style={{ paddingBottom: "6rem" }}>
                        <Link to="/">Back to Results</Link>
                        <div className="rows top">
                            <div className="col-3">
                                <img className="large" src={product.image} alt={product.name}></img>
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li>
                                        <h1><b>{product.name}</b></h1>
                                    </li>
                                    <li style={{ borderBottom: "1px solid grey", paddingBottom: "5px" }}>
                                        <Rating rating={Math.random() * 5} numReviews={product.numReviews} />
                                    </li>
                                    <li><b>Price :</b> ${product.price}</li>
                                    <li>
                                        <b>About this item:</b>
                                        <p>{product.description}</p>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-1">
                                <div className="card card-bodyy">
                                    <ul>
                                        <li>
                                            <div className="rows">
                                                <div>Price</div>
                                                <div className="price">${product.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rows">
                                                <div>Status</div>
                                                <div>{product.countInStock > 0 ? (
                                                    <span className="success">In Stock</span>) : (
                                                    <span className="danger">Unavailable</span>
                                                )}

                                                </div>
                                            </div>
                                        </li>
                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div className="rows">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                                                    {
                                                                        [...Array(product.countInStock).keys()].map((x) => (
                                                                            <option key={x + 1} value={x + 1}>
                                                                                {x + 1}
                                                                            </option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                                    </li>
                                                </>
                                            )
                                        }
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                    <h1 className="main2" style={{ width: "75%" }}>

                        {loading ? (
                            <LoadingBox />
                        ) : review?.review ? (
                            <div style={{fontSize:"1.6rem"}}>
                                Your Review
                                <div style={{display:"inline"}}>
                                <i onClick={() => alert("you are editing")} style={{cursor:"pointer",padding:"1.2rem"}} className="fas fa-pencil-alt"></i>
                                <i onClick={() => alert("here we delete review")} style={{cursor:"pointer"}} className="fas fa-trash"></i>
                                </div>
                                <div style={{ borderBottom: "1px solid grey", fontSize: "1.5rem", padding: "2rem", margin: "1rem" }}>
                                    <div style={{ paddingBottom: "1rem" }}>
                                        <b>{user[review?.userId - 1]?.username}</b>
                                    </div>
                                    <div style={{ paddingBottom: "1rem" }}>
                                        "{review?.review}"
                                    </div>
                                    <div style={{ fontSize: "20px", color: "grey" }}>
                                        {review?.createdAt}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <button style={{ margin: "2rem 2rem 2rem 0rem" }} onClick={() => setState(true)}>
                                    Create a Review
                                </button>
                                {state ? (
                                    <div>
                                        <form onSubmit={createRev} method="POST">
                                            <input
                                                placeholder="Add Review..."
                                                value={reviewText}
                                                onChange={(e) => setReviewText(e.target.value)}
                                            />
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div>
                                ) : (
                                    <></>
                                )

                                }
                            </div>
                        )
                        }
                        {/*
                        <div>
                            <b>Your Review</b>
                            <div style={{ borderBottom: "1px solid grey", fontSize: "1.5rem", padding: "2rem", margin: "1rem" }}>
                                <b>{user[review?.userId - 1]?.username}</b>
                                <div>
                                    "{review?.review}"
                                </div>
                                <div style={{ fontSize: "20px", color: "grey" }}>
                                    {review?.createdAt}
                                </div>
                            </div>
                        </div> */}
                        <div style={{fontSize:"1.8rem"}}>
                            <b>All Reviews
                            </b>
                        </div>
                        <div style={{ padding: "1rem" }}>
                            {reviews?.map(each => (
                                <div key={each.id} style={{ borderBottom: "1px solid grey", fontSize: "1.5rem", padding: "2rem", margin: "1rem" }}>
                                    <div style={{ paddingBottom: "1rem" }}>
                                        <b>{user[each.userId - 1]?.username}</b>
                                    </div>
                                    <div style={{paddingBottom: "1rem"}}>
                                        "{each.review}"
                                    </div>
                                    <div style={{ fontSize: "20px", color: "grey" }}>
                                        {each.createdAt}
                                    </div>
                                </div>
                            ))}
                            {/* {loading ? (
                                <LoadingBox></LoadingBox>
                            ) : state ? reviews?.map(each => (
                                <div style={{ borderBottom: "1px solid grey", padding: "2rem", fontSize:"1.5rem", margin: "1rem" }}>
                                    <b>{user[each.userId - 1].username}:</b>
                                    <div>
                                        "{each.review}"
                                    </div>
                                </div>
                            )) : (
                                <div style={{ fontWeight: "bold", padding: "1rem", margin: "1rem" }}>No Reviews</div>
                            )
                            } */}
                        </div>
                    </h1>
                </>
            )}
        </div>
    )
}
