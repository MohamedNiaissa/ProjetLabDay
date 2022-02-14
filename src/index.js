import React from 'react';
import ReactDOM from 'react-dom';
import App from './elements/App';
import "./css/packet.scss";

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader-hide');
const hideLoader = () => loader.classList.add('loader-hide');

ReactDOM.render(<App hideLoader={hideLoader} showLoader={showLoader}/>, document.getElementById('root'))