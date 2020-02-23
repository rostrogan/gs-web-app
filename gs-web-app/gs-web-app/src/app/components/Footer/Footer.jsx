import * as React from "react";
import styles from "./Footer.module.scss";

const HeaderComponent = () => {
    return (
        <div className={styles.footer}>
            <span>КПІ {(new Date().getFullYear())}</span>
        </div>
    )
};

export default HeaderComponent;