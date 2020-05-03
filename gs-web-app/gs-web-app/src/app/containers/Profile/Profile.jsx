import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileComponent from "./ProfileComponent";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";
import withRedirect from "../../utils/withAuthRedirect";

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

let AuthRedirectComponent = withRedirect(Profile);

export default connect(mapStateToProps)(AuthRedirectComponent);

