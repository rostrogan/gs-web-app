import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';

import { Routes } from '../../consts/routePaths';

const RoutesComponts = () => {
    return (
        <Switch>
            <Route exact path={Routes.LOGIN} component={Home} />
            <Redirect from={Routes.HOME} to={Routes.LOGIN} />
        </Switch>
    );
};

export default RoutesComponts;