import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetGroupAddComponent from "./CabinetGroupAddComponent";
import withRedirect from "../../utils/withAuthRedirect";

const CabinetGroupAdd = () => {
  return (
   <>
     <Header/>
      <CabinetGroupAddComponent />
     <Footer/>
   </>
  );
};

let AuthRedirectComponent = withRedirect(CabinetGroupAdd);

export default AuthRedirectComponent;
