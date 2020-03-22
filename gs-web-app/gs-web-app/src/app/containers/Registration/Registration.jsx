import * as React from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegistrationFormComponent from "./components/RegistrationFormComponent";

const RegistrationComponent = () => {
    return (
        <>
            <Header />
                <RegistrationFormComponent/>
            <Footer/>
        </>
    )
};

export default RegistrationComponent;
