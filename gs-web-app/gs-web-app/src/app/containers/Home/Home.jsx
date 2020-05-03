import React  from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from './components/Login';
import {makeSelectUserData} from '../../state/selectors/user';
import withRedirect from "../../utils/withAuthRedirect";

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

let AuthRedirectComponent = withRedirect(HomeComponent);


export default connect(mapStateToProps)(AuthRedirectComponent);
