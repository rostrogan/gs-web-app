import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetTeachersComponent from '../CabinetTeachers/components/CabinetTeachersComponent';

const CabinetTeachers = () => {

  return (
    <>
      <Header/>
       <CabinetTeachersComponent/>
      <Footer/>
    </>
  );
};

export default CabinetTeachers;
