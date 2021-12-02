import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, tenProducts } from '../actions/productActions';
import { Link, useParams } from 'react-router-dom';

export default function Categories() {
    //react hook, to manage state component
    const productList = useSelector(state => state.productList);
    const dispatch = useDispatch();
    const { loading, error, products } = productList;

    let { id } = useParams();

    const categoryChecker = (params) => {
        //id = electronics
        if(id === 'mensClothing' && params === "men's clothing") return true;
        if(id === 'womensClothing' && params === "women's clothing") return true;
        if(params === id) return true;

        return false;
    }

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="grid-container">
            <div className="main2">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="rowsHome center">
                        {products.map((item) => {
                            if(categoryChecker(item.category)) return (

                            <>
                                <Product key={item.id} product={item} />
                            </>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
