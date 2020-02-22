import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Header';

const AppLayout = (props) => {
    const { component: Component, path } = props;

    return <Route path={path} render={ matchProps => (
        <div>
            <Header />
            <Component {...matchProps} />
            <Footer />
        </div>
    )}/>;
};

export default AppLayout;