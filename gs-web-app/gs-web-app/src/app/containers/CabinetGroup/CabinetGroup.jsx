import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetGroupComponent from './CabinetGroupComponent';

const CabinetGroup = () => {

  return (
    <>
      <Header/>
       <CabinetGroupComponent />
      <Footer/>
    </>
  );
};

export default CabinetGroup;
