import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeacherLessonsAddComponent from "./TeacherLessonsAddComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const TeacherLessonsAdd = (props) => {
  return (
    <>
      <Header/>
        <TeacherLessonsAddComponent {...props} />
      <Footer/>
    </>
  )
};

export default connect(mapStateToProps)(TeacherLessonsAdd);

