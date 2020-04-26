import React from 'react';

import AppLayout from '../App/AppLayout';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PublicRoute = (props) => {
    return (
      <>
      <Header/>
        <AppLayout {...props} />
      <Footer/>;
      </>
    )
};

export default PublicRoute;
