import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector(state => state.session.user);
    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);

    return (
        <div>
            <ol>
                Username: {user?.username}
            </ol>
            <ol>
                Email: {user?.email}
            </ol>
        </div>
    );
}

export default Profile;
