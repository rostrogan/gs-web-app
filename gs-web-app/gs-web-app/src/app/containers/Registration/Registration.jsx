import * as React from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegistrationFormComponent from "./RegistrationFormCompoent";

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
