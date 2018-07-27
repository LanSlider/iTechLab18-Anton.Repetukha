import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import CounterParent from './containers/CounterParent.js';

let index = [<App />,<CounterParent />];

ReactDOM.render(index, document.getElementById('root'));