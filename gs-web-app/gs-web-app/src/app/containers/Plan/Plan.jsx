import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PlanComponent from "./PlanComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";
import withRedirect from "../../utils/withAuthRedirect";

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

let AuthRedirectComponent = withRedirect(Plan);

export default connect(mapStateToProps)(AuthRedirectComponent);

