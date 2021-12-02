import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, tenProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

export default function AllScreen() {
    //react hook, to manage state component
    const productList = useSelector(state => state.productList);
    const productDetailsTen = useSelector(state => state.productList10);
    const [number, setNumber] = useState(0)
    const [newCat, setNewCat] = useState(false)
    const [category, setCategory] = useState("women's clothing")
    const dispatch = useDispatch();
    const { loading, error, products } = productList;

    const changeCategory = (x) => {
        if (x !== category) {
            setCategory(x)
        }
    }

    const handleClick = () => <Link to="/cart" />
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch, category]);
    return (
        <div className="grid-container">
            {/* <div>
                {loading ? (
                    <></>
                ) : (
                    <div>
                        Category: {products[number].category}
                    </div>
                )
                }
            </div> */}
            <div className="main2">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="rowsHome center">
                        {products.map((item) => (
                            <>
                                <Product key={item.id} product={item} />
                            </>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
