import React from "react";
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../state/selectors/user";
import {compose} from "recompose";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Routes} from "../consts/routePaths";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData()
});

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {

    componentDidMount() {
      if (Boolean(1)) return <Redirect to={Routes.HOME} />;
    }

    render() {
      return <Component {...this.props} />
    }
  }

  const hoc = compose(
    connect(mapStateToProps),
  );

  return hoc(RedirectComponent);
};
