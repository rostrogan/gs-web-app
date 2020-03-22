import React from 'react';
import {Route} from 'react-router-dom';

const AppLayout = (props) => {
    const {component: Component, path} = props;

    return (
        <Route path={path} render={
            matchProps => (
                <>
                    <Component {...matchProps} />
                </>
            )}
        />
    );
};

export default AppLayout;