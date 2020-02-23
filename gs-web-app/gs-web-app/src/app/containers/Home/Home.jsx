import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from '../Home/components/Login'
const HomeComponents = () => {
    return (
        <>
            <Header />
                <Login />
            <Footer />
        </>
    );
};

export default HomeComponents;