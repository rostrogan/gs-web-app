import * as React from 'react';
import styles from './Home.module.scss'
import Header from '../../components/Header'
const HomeComponent = () => {
    return (
        <>
            <Header />
            <nav className={styles.header}>Home</nav>
        </>
    );
};

export default HomeComponent;