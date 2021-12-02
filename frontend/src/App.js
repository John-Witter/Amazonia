import { BrowserRouter, Link, Route } from 'react-router-dom';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage'
import * as sessionActions from './reducers/userReducer'
import ProfileButton from './components/ProfileButton';
import { useState } from 'react';
import { useEffect } from 'react';
import Navigation from './components/NavigationBar';
import Profile from './screens/ProfileScreen';
import AllScreen from './screens/AllScreen';
import Categories from './screens/Categories';
function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;


  return (
    <>
    <BrowserRouter>
    <Navigation isLoaded={isLoaded} />
      <div className="grid-container">
        {/* <header className="rows"> */}
            {/* {isLoaded
              ?
              <div>
                <Link to="/cart">Cart {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                <ProfileButton user={sessionUser}/>
              </div>
              :
              <div>
                <Link to="/cart">Cart {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign-up</Link>
              </div>
            } */}
        {/* </header> */}
        <main className="main2">
          <Route path="/cart/:id?" component={CartScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/categories/:id" component={Categories} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/all" component={AllScreen} exact></Route>
          <Route path="/login"><LoginFormPage /></Route>
          <Route path="/signup"><SignupFormPage /></Route>
          <Route path="/profile" component={Profile}></Route>
        </main>
        <footer className="rows center">
          <a href="https://github.com/Tonomatic" className="foot">GitHub</a>
          <div>-</div>
          <a href="https://www.linkedin.com/in/jose-solis-garcia-17940b71/" className="foot"> LinkedIn</a>
        </footer>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
