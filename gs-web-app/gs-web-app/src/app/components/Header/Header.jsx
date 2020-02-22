import * as React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/kpi-logo-black.png";
import AccountCircleRounded from "@material-ui/icons/AccountCircleRounded";
import ExitToApp from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import { Routes }  from "../../consts/routePaths"

const userName = 'Alex';

const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <Link to={Routes.HOME} className={styles.header__logo}>
                <img src={Logo} alt="logo" />
                <span>Аспірантура КПІ</span>
            </Link>

            <div className={styles.header__logged}>
                <span className={styles.header_userName}>
                     Вітаємо, {userName}
                </span>
                <Link to={Routes.HOME} className={styles.header__logged_icon}>
                    <IconButton
                        color="inherit"
                        aria-label="upload picture"
                        component="span"
                    >
                        <AccountCircleRounded />
                    </IconButton>
                </Link>
                <IconButton
                    color="inherit"
                    aria-label="upload picture"
                    component="span">
                    {
                        //isLoggedIn
                        true && <ExitToApp />
                    }
                </IconButton>
            </div>
        </div>
    )
};

export default HeaderComponent;