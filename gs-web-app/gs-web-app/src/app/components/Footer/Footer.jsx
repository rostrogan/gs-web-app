import * as React from "react";
import styles from "./Footer.module.scss";

const HeaderComponet = () => {
    return (
        <div className={styles.footer}>
            <span>КПІ {(new Date().getFullYear())}</span>
        </div>
    )
};

export default HeaderComponet;