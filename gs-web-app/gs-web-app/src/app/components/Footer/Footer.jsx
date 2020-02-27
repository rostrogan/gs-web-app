import * as React from "react";
import styles from "./Footer.module.scss";

const FooterComponent = () => {
    return (
        <div className={styles.Footer}>
            <span>КПІ {(new Date().getFullYear())}</span>
        </div>
    )
};

export default FooterComponent;