import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetComponent from './CabinetComponent';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {makeSelectUserData} from "../../state/selectors/user";
import  withRole from "../../utils/withRole"

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const Cabinet = (props) => {
  return (
    <>
      <Header/>
       <CabinetComponent {...props}/>
      <Footer/>
    </>
  );
};

export default connect(
  mapStateToProps,
  withRole,
)(Cabinet);
