import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import CounterContainer from './containers/CounterContainer.js';

let index = [<App />,<CounterContainer />];

ReactDOM.render(index, document.getElementById('root'));