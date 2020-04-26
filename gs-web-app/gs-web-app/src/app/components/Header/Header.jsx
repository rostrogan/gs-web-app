import * as React from 'react';
import Logo from '../../../assets/img/kpi-logo-black.png';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import ExitToApp from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {makeSelectUserData} from '../../state/selectors/user';

import {Routes} from '../../consts/routePaths'
import authService from '../../services/authService';


const mapStateToProps = createStructuredSelector({
    userData: makeSelectUserData(),
});

const HeaderComponent = ({userData}) => {
    const {name} = userData || {};
    const {patronymic} = userData || {};
    const isLoggedIn = !!userData;

    return (
        <div className={styles.Header}>
            <Link to={Routes.HOME} className={styles.Header__logo}>
                <Button>
                    <img src={Logo} alt="logo"/>
                    Аспірантура КПІ
                </Button>
            </Link>

            {
                isLoggedIn &&
                <div className={styles.Header__logged}>
                <span className={styles.Header_userName}>
                     Вітаємо, {name} {patronymic}
                </span>
                    <Link to={Routes.HOME} className={styles.Header__logged_icon}>
                        <IconButton
                            color="inherit"
                            aria-label="upload picture"
                            component="span"
                        >
                            <AccountCircleRounded/>
                        </IconButton>
                    </Link>
                    <IconButton
                        color="inherit"
                        aria-label="upload picture"
                        component="span"
                        onClick={authService.logout}
                    >
                        <ExitToApp/>
                    </IconButton>
                </div>
            }
        </div>
    )
};

export default connect(mapStateToProps)(HeaderComponent);
