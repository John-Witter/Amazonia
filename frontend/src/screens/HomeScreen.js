import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, featuredProducts } from '../actions/productActions';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    //react hook, to manage state component
    const productList = useSelector(state => state.productList);
    const productDetailsTen = useSelector(state => state.featuredProducts);
    const dispatch = useDispatch();
    const { loading, error, products } = productList;
    const { productsFeatured } = productDetailsTen;
    const componentLoad = (x) => {
        if (!loading && !error) {
            return `/product/${x}`
        }

    }
    const handleClick = () => <Link to="/cart" />
    useEffect(() => {
        dispatch(featuredProducts())
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="grid-container2">
            <div className="showcase" style={{ fontSize: "2rem", fontWeight: "bold" }}>
                Featured
                <div>
                </div>
                <Carousel variant="dark" style={{ padding: "0px 0px 0px 200px" }}>
                    <Carousel.Item>
                        <Link
                            to={componentLoad(13)}
                        >
                            <img
                                className="d-block w-100 large"
                                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                                alt="Second slide"
                            />
                        </Link>
                        <Link
                            to={componentLoad(13)}
                        >
                            <Carousel.Caption style={{ paddingBottom: "5rem", width: "70rem", paddingLeft: "15%" }}>
                                {loading ? (
                                    <LoadingBox></LoadingBox>
                                ) : error ? (
                                    <MessageBox variant="danger">{error}</MessageBox>
                                ) : (
                                    <>

                                        <h4 style={{ fontWeight: "bold" }}>
                                            {products[18].name}
                                        </h4>
                                        <p style={{ fontWeight: "normal", fontSize: "1rem" }}>{products[18].description}</p>
                                    </>
                                )}
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link
                            to={componentLoad(14)}
                        >                            <img
                                className="d-block w-100 large"
                                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                                alt="Second slide"
                            />
                        </Link>
                        <Link
                            to={componentLoad(14)}
                        >
                            <Carousel.Caption style={{ paddingBottom: "5rem", width: "70rem", paddingLeft: "15%" }}>
                                {loading ? (
                                    <LoadingBox></LoadingBox>
                                ) : error ? (
                                    <MessageBox variant="danger">{error}</MessageBox>
                                ) : (
                                    <>

                                        <h4 style={{ fontWeight: "bold" }}>
                                            {products[19].name}
                                        </h4>
                                        <p style={{ fontWeight: "normal", fontSize: "1rem" }}>{products[19].description}</p>
                                    </>
                                )}
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link
                            to={componentLoad(11)}
                        >
                            <img
                                className="d-block w-100 large"
                                src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
                                alt="Third slide"
                            />
                        </Link>
                        <Link
                            to={componentLoad(11)}
                        >
                            <Carousel.Caption style={{ paddingBottom: "5rem", width: "70rem", paddingLeft: "15%" }}>
                                {loading ? (
                                    <LoadingBox></LoadingBox>
                                ) : error ? (
                                    <MessageBox variant="danger">{error}</MessageBox>
                                ) :
                                    (
                                        <>

                                            <h4 style={{ fontWeight: "bold" }}>
                                                {products[15].name}
                                            </h4>
                                            <p style={{ fontWeight: "normal", fontSize: "1rem" }}>{products[15].description}</p>
                                        </>
                                    )
                                }
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="main2">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>More Products you might like</div>
                        <div className="rowsHome center">
                            {productsFeatured?.map((item, index) => (
                                <Product key={item.id} product={item} />
                            ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "2rem" }}>
                            <Link to="/all">More...</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
