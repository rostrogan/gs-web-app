import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CabinetComponent from './CabinetComponent';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {makeSelectUserData} from "../../state/selectors/user";
import { withAuthRedirect } from "../../utils/withAuthRedirect"
import {compose} from "recompose";

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const Cabinet = (props) => {
  return (
    <>
      <Header/>
       <CabinetComponent {...props}/>
      <Footer/>
    </>
  );
};


const hoc = compose(
  connect(mapStateToProps),
  withAuthRedirect,
);

export default hoc(Cabinet);
