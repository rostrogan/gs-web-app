import * as React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/kpi-logo-black.png";

import AccountCircleRounded from "@material-ui/icons/AccountCircleRounded";
import ExitToApp from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import { Routes }  from "../../consts/routePaths"


const userName = 'Alex';
const isLoggedIn = false;

const HeaderComponent = () => {
    return (
        <div className={styles.Header}>
            <Link to={Routes.HOME} className={styles.Header__logo}>
                <Button>
                    <img src={Logo} alt="logo" />
                    Аспірантура КПІ
                </Button>
            </Link>

            <div className={styles.Header__logged}>
                <span className={styles.Header_userName}>
                     Вітаємо, {userName}
                </span>
                <Link to={Routes.HOME} className={styles.Header__logged_icon}>
                    <IconButton
                        color="inherit"
                        aria-label="upload picture"
                        component="span"
                    >
                        <AccountCircleRounded />
                    </IconButton>
                </Link>
                {
                    isLoggedIn && ( <IconButton
                            color="inherit"
                            aria-label="upload picture"
                            component="span">
                            {
                                isLoggedIn && <ExitToApp />
                            }
                        </IconButton>
                    )
                }
            </div>
        </div>
    )
};

export default HeaderComponent;