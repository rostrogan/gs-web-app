import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';

import { Routes } from '../../consts/routePaths';

const RoutesComponts = () => {
    return (
        <Switch>
            <Route exact path={Routes.HOME} component={Home} />
        </Switch>
    );
};

export default RoutesComponts;