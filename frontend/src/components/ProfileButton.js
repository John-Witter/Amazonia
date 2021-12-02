import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import * as sessionActions from '../reducers/userReducer';
import Dropdown from 'react-bootstrap/Dropdown'
function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle className="userProfile" id="dropdown-button-dark-example1" variant="secondary" style={{fontSize:'1.6rem',border:'none',backgroundColor: '#203040'}}>
                    User
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" style={{backgroundColor: '#203040'}}>

                    <Dropdown.Item href="/profile" >User Profile</Dropdown.Item>
                    <Dropdown.Item href="/history">Order History</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default ProfileButton;
