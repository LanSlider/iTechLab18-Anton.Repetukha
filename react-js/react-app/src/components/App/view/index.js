import React from 'react';
import Header from '../../Header/container/Header';
import About from '../../About/view';
import CounterParent from '../../CounterParent/container/CounterParent';
import Login from '../../Login/container/Login';
import LoginRedux from '../../LoginRedux/container/LoginRedux';
// import LoginReduxForm from '../../LoginReduxForm/container/LoginReduxForm';
import NotFound from '../../NotFound/view';
import LoginSuccess from '../../LoginRedux/container/LoginSuccess';
// import LoginSuccessForm from '../../LoginReduxForm/container/LoginReduxSuccess';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
    return (
    <main>
        <Switch>
            <Route exact path="/" component={Header}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/counter" component={CounterParent}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/login-redux" component={LoginRedux}/>
            {/* <Route exact path="/login-redux-form" component={LoginReduxForm} /> */}
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/login-redux/success" component={LoginSuccess} />
            {/* <Route exact path="/login-redux-form/success" component={LoginSuccessForm} /> */}
            <Redirect to="/404" />
        </Switch>
    </main>
    )
}

export default App;