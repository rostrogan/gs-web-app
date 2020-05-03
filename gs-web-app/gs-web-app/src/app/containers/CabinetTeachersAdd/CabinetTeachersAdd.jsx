import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetTeachersAddComponent from "./CabinetTeachersAddComponent";
import {createStructuredSelector} from "reselect";
import withRedirect from "../../utils/withAuthRedirect";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  // userData: makeSelectUserData(),
});

const CabinetTeachersAdd = () => {
  return (
   <>
     <Header/>
        <CabinetTeachersAddComponent />
     <Footer/>
   </>
  );
};

let AuthRedirectComponent = withRedirect(CabinetTeachersAdd);

export default connect(mapStateToProps)(AuthRedirectComponent);
