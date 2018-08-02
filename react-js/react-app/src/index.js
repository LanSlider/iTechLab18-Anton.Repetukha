import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/view/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/loginRedux'
import { HashRouter }  from 'react-router-dom';

const store = createStore(reducer)

window.store = store;

ReactDOM.render ((
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
), document.getElementById('root'))