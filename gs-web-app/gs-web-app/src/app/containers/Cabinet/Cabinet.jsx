import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetComponent from '../Cabinet/components/CabinetComponent';

const Cabinet = () => {

  return (
    <>
      <Header/>
       <CabinetComponent/>
      <Footer/>
    </>
  );
};

export default Cabinet;
