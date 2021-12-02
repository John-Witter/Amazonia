import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { restoreCSRF, csrfFetch } from './reducers/csrf.js';
import reportWebVitals from './reportWebVitals';
import store from './store';
import * as sessionActions from './reducers/userReducer';

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
}

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
