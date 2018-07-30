import React from 'react/index.js';
import Header from '../../Header/container/Header';
import About from '../../About/view/index';
import CounterParent from '../../CounterParent/container/CounterParent';
import NotFound from '../../NotFound/view/index';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
    return (
    <main>
        <Switch>
            <Route exact path="/" component={Header}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/counter" component={CounterParent}/>
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    </main>
    )
}

export default App;