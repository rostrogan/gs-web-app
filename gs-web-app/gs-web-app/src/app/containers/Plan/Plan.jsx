import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PlanComponent from "./PlanComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const Plan = (props) => {
  return (
    <>
      <Header/>
        <PlanComponent {...props} />
      <Footer/>
    </>
  )
};

export default connect(mapStateToProps)(Plan);

