import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileComponent from "./ProfileComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";
import {branch, compose, renderNothing} from "recompose";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const Profile = ({userData}) => {
  return (
   <>
     <Header/>
      <ProfileComponent userData={userData} />
     <Footer/>
   </>
  )
};

const hoc = compose(
  connect(mapStateToProps),
  branch(props => !props.userData, renderNothing)
);

export default hoc(Profile);

