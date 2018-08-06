import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/view/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import { HashRouter }  from 'react-router-dom';

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render ((
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
), document.getElementById('root'))