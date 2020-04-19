import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeacherLessonsComponent from "./TeacherLessonsComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const TeacherLessons = (props) => {
  return (
    <>
      <Header/>
        <TeacherLessonsComponent {...props} />
      <Footer/>
    </>
  )
};

export default connect(mapStateToProps)(TeacherLessons);

