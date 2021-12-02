import React, { useState } from 'react';
import * as sessionActions from '../../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);


    if (sessionUser) return (
        <Redirect to="/" />
    )

    const handleSumbit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }


    return (
        <div className="first_wrapper">
            <div className="form_wrapper" style={{height:"400px"}}>
                <div className="form_container">
                    <div className="title_container">
                        <h1>Login</h1>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form onSubmit={handleSumbit}>
                                <ul>
                                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                </ul>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field"> <span className="icoon"><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input
                                                type="text"
                                                className="inputText"
                                                placeholder="Username"
                                                value={credential}
                                                onChange={(e) => setCredential(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field"> <span className="icoon"><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input
                                        type="password"
                                        className="inputText"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" style={{ margin: "1rem" }}>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <form onSubmit={handleSumbit}>
        //     <ul>
        //         {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        //     </ul>
        //     <label>
        //         Username or email
        //         <input
        //             type="text"
        //             value={credential}
        //             onChange={(e) => setCredential(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <label>
        //         Password
        //         <input
        //             type="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <button type="submit">Log In</button>
        // </form>
    )
}

export default LoginFormPage;
