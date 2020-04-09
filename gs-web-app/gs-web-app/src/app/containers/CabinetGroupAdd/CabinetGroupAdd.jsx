import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetGroupAddComponent from "./CabinetGroupAddComponent";

const CabinetGroupAdd = () => {
  return (
   <>
     <Header/>
      <CabinetGroupAddComponent />
     <Footer/>
   </>
  );
};

export default CabinetGroupAdd;
