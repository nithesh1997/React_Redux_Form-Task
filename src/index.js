import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducer/user';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    login: userSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

