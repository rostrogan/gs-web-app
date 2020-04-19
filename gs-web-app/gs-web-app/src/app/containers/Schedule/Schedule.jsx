import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScheduleComponent from "./ScheduleComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const Schedule = (props) => {
  return (
    <>
      <Header/>
        <ScheduleComponent {...props} />
      <Footer/>
    </>
  )
};

export default connect(mapStateToProps)(Schedule);

