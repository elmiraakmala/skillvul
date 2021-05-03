import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './container/home';
import About from './container/about';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Home />, document.getElementById('txt_home'));
ReactDOM.render(<About />, document.getElementById('txt_about'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();