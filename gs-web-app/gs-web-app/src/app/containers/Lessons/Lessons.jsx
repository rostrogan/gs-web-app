import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LessonsComponent from "./LessonsComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const Lessons = (props) => {
  return (
    <>
      <Header/>
        <LessonsComponent {...props} />
      <Footer/>
    </>
  )
};

export default connect(mapStateToProps)(Lessons);

