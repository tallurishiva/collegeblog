import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Searchsol from './Searchsol';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyADwjIIptzW0Gf0X_m60o5qyRFeYIUBsFY",
  authDomain: "blog-9eac0.firebaseapp.com",
  projectId: "blog-9eac0",
  storageBucket: "blog-9eac0.appspot.com",
  messagingSenderId: "173928820211",
  appId: "1:173928820211:web:81c66ee5845526a182b686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <App/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
