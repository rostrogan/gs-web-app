import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileComponent from "./ProfileComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const Profile = (props) => {
  return (
   <>
     <Header/>
      <ProfileComponent {...props} />
     <Footer/>
   </>
  )
};

export default connect(mapStateToProps)(Profile);

