import * as React from 'react';
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";
import MenuComponent from "./MenuComponent";

const mapStateToProps = () => {
  userData: makeSelectUserData()
};

const Menu = (props) => {
  console.log(props, 'props hello');

  return (
    <MenuComponent />
  );
};

export default connect(mapStateToProps)(Menu);
