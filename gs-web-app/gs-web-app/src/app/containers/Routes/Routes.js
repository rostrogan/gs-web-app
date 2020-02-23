import React from 'react';
import {Route, Switch} from 'react-router-dom';

import * as routePaths from '../../consts/routePaths';
import Root from '../Root/Root';

const Routes = () => {
    return <Switch>
        <Route exact path={routePaths.ROOT} component={Root}/>
    </Switch>;
};

export default Routes;