import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetGroupComponent from './CabinetGroupComponent';
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";
import {makeSelectGroupsData} from "../../state/selectors/global";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
  groups: makeSelectGroupsData(),
});

const CabinetGroup = (props) => {
  return (
    <>
      <Header/>
       <CabinetGroupComponent {...props} />
      <Footer/>
    </>
  );
};

export default connect(mapStateToProps)(CabinetGroup);
