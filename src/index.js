import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from './Reducers/userReducer';
import { ohuserReducer } from './Reducers/ohuserReducer';


const store = configureStore(
 {
  reducer: {
    users: userReducer,
    ohusers: ohuserReducer,
  }
 }
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

