import React  from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from './components/Login';
import {makeSelectUserData} from '../../state/selectors/user';
import {withAuthRedirect} from "../../utils/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
    userData: makeSelectUserData(),
});

const HomeComponent = ({userData}) => {
    return (
        <>
            <Header/>
              <Login userData={userData}/>
            <Footer/>
        </>
    );
};

const hoc = compose(
  connect(mapStateToProps),
  withAuthRedirect
);

export default hoc(HomeComponent);
