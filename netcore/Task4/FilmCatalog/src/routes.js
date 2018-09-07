import React from 'react';
import LogIn from './components/LogIn/container/LogIn';
import Register from './components/Register/container/Register';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FilmPage from './pages/FilmPage';
import NotFound from './pages/NotFound';

export default () => {
    return (
    <main>
        <Switch>
            <Route exact path="/film/:id" component={FilmPage} />
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    </main>
    )
}