import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Registartion from '../Registration';
import Cabinet from '../Cabinet';
import CabinetGroup from '../CabinetGroup';
import CabinetTeachers from '../CabinetTeachers';

import { Routes } from '../../consts/routePaths';

const RoutesComponent = () => {
    return (
        <Switch>
            <Route exact path={Routes.LOGIN} component={Home} />
            <Route exact path={Routes.CABINET} component={Cabinet} />
            <Route exact path={Routes.CABINET_GROUP_LIST} component={CabinetGroup} />
            <Route exact path={Routes.CABINET_TEACHERS_LIST} component={CabinetTeachers} />
            <Route exact path={Routes.REGISTRATION} component={Registartion} />
            <Redirect from={Routes.HOME} to={Routes.LOGIN} />
        </Switch>
    );
};

export default RoutesComponent;