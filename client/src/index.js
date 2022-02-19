import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/packet.scss";

const loader = document.querySelector('.loader');
const hideLoader = () => loader.classList.add('loader-hide');

ReactDOM.render(<App hideLoader={hideLoader}/>, document.getElementById('root'));