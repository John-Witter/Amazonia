import React, { useState } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import Button from '@restart/ui/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../reducers/userReducer';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const products = useSelector(state => state.productList.products)
    const loading = useSelector(state => state.productList.loading)
    const [category, setCategory] = useState("electronics")
    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    const categories = (x) => {
        if (x !== category) {
            setCategory(x)
            return true;
        } else {
            return false
        }
    }

    const demoLogin = async (e) => {
        const credential = 'demo@user.io';
        const password = 'password';
        e.preventDefault();
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
            });

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
            <div>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <button className="demo" onClick={demoLogin}>Demo-Login</button>
            </div>
        );
    }

    return (
        <header className="rows headerBar header2">
            <div className="sidebar">
                <div>
                    <Button variant="primary" onClick={handleShow} className="fas fa-bars" />
                    <Offcanvas show={show} scroll={true} backdrop={true} onHide={handleClose} style={{ backgroundColor: "#efefef", padding: "20px" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ fontSize: "1.6rem", fontWeight: "bold" }}>Categories</Offcanvas.Title>
                        </Offcanvas.Header>
                        <div className="sidebarContent">
                            <nav className="menu-nav">
                                <ul>
                                    <Link to={`/categories/electronics`} onClick={handleClose}>
                                        <li >Electronics</li>
                                    </Link>

                                    <Link to="/categories/jewelery" onClick={handleClose}>
                                        <li>Jewelery</li>
                                    </Link>
                                    <Link to="/categories/mensClothing" onClick={handleClose}>
                                        <li>Men's Clothing</li>
                                    </Link>
                                    <Link to="/categories/womensClothing" onClick={handleClose}>
                                        <li>Women's Clothing</li>
                                    </Link>

                                </ul>
                            </nav>

                            {/* <Link to="/all" onClick={handleClose}>All</Link> */}
                        </div>
                    </Offcanvas>
                </div>
                <Link className="brand" to="/">amazonia</Link>
            </div>
            {isLoaded && (
                <div className="search-container">
                    <form action="/action_page.php" style={{ display: "flex", alignItems: "center" }}>
                        <input type="text" placeholder="Search.." name="search" style={{ cursor: "text", borderRadius: "0px", height: "3rem" }} />
                        <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            )}
            {isLoaded && sessionLinks}
        </header>
    );
}

export default Navigation;
