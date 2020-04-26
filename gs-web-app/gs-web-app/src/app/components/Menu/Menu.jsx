import * as React from 'react';
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";
import MenuComponent from "./MenuComponent";
import {createStructuredSelector} from "reselect";
import {branch, compose, renderNothing} from "recompose";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData()
});

const Menu = ({userData}) => {
  return (
    <MenuComponent role={userData.role} />
  );
};

const hoc = compose(
  connect(mapStateToProps),
  branch((props) => !props.userData, renderNothing)

);

export default hoc(Menu);
