import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetTeachersComponent from './CabinetTeachersComponent';
import withRedirect from "../../utils/withAuthRedirect";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
// import {makeSelectUserData} from "../../state/selectors/user";

const mapStateToProps = createStructuredSelector({
  // userData: makeSelectUserData(),
});


const CabinetTeachers = (props) => {
  return (
    <>
      <Header/>
       <CabinetTeachersComponent {...props} />
      <Footer/>
    </>
  );
};

let AuthRedirectComponent = withRedirect(CabinetTeachers);

export default connect(mapStateToProps)(AuthRedirectComponent);
