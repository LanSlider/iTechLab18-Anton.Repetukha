import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/view/index';
import { HashRouter }  from 'react-router-dom';

ReactDOM.render ((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'))