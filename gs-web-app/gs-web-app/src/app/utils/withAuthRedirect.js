import {connect} from "react-redux";
import React from "react";
import {createStructuredSelector} from "reselect";
// import {Redirect} from "react-router-dom";
// import {Routes} from "../consts/routePaths";
import {makeSelectUserData} from "../state/selectors/user";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData()
});

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      console.log(this.props.userData);

      // if (Boolean(this.props.userData)) return <Redirect to={Routes.HOME} />;

      return <Component {...this.props} />
    }

  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);


  return ConnectedAuthRedirectComponent;

};

export default withAuthRedirect;
