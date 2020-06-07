import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { Routes } from '../consts/routePaths';
import {createStructuredSelector} from "reselect";
import {makeSelectUserData} from "../state/selectors/user";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) => {
      if (rest.userData === null) {
        return <Redirect to={{
          pathname: Routes.HOME,
          state: {form: props.location}
        }}
        />
      } else {
        return <Component {...props} />
      }
    }}
  />
);

export default connect(mapStateToProps)(PrivateRoute);

