import * as React from 'react';
import {makeSelectUserData} from "../../state/selectors/user";
import {connect} from "react-redux";
import MenuComponent from "./MenuComponent";
import {createStructuredSelector} from "reselect";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData()
});

const Menu = (props) => {

  return (
    <MenuComponent />
  );
};

export default connect(mapStateToProps)(Menu);
