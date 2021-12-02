import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Button from '@restart/ui/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const products = useSelector(state => state.productList.products)
    const loading = useSelector(state => state.productList.loading)
    const [category, setCategory] = useState("electronics")

    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;


    const categories = (x) => {
        if (x !== category) {
            setCategory(x)
            return true;
        } else {
            return false
        }
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className="rightSide">
                <Link to="/cart">Cart {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                <ProfileButton user={sessionUser} />

            </div>
        );
    } else {
        sessionLinks = (
            <div  >
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        );
    }

    return (
        <div>Review</div>
    );
}

export default Navigation;
