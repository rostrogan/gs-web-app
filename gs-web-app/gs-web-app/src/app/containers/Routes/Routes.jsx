import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Registartion from '../Registration';

import { Routes } from '../../consts/routePaths';

const RoutesComponent = () => {
    return (
        <Switch>
            <Route exact path={Routes.LOGIN} component={Home} />
            <Route exact path={Routes.REGISTRATION} component={Registartion} />
            <Redirect from={Routes.HOME} to={Routes.LOGIN} />
        </Switch>
    );
};

export default RoutesComponent;