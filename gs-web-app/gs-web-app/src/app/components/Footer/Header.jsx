import * as React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../../../static/assets/img/kpi-logo.png";

const HeaderComponet = () => {
    return (
        <div className={styles.header}>
            <Link to={"/"}>
                <img src={Logo} alt=""/>
            </Link>
        </div>
    )
};

export default HeaderComponet;