import React from 'react';
import { Switch, Route } from 'react-router-dom';


// Pages
import Login from './pages/login';
import Home from './pages/home';
import Pay from './pages/pay';



/* import Monitoramento from './pages/monitoramento'; <Route path="/monitoramento" exact component={Monitoramento} /> */
export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/pay" exact component={Pay} />
        </Switch>
    );
}