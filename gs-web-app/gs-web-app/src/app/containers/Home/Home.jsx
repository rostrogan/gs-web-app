import React, {useEffect} from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from './components/Login'
import apiRequestService from '../../services/api/apiRequestService';

const HomeComponent = () => {
    useEffect(() => {
        const defaultFormData = {
            surname: 'фыв',
            name: 'фыв',
            patronymic: 'фыв',
            sex: 'ж',
            birth_date: 'Thu Mar 12 2020 21:44:00 GMT+0200 (Eastern European Standard Time',
            create_date: new Date().getDate(),
            specialty: '1',
            faculty: '1',
            department: '3',
            study_form: '1',
            pay_form: '1',
            foreign_language: '2',
            graduation_university: 'цукцу',
            graduation_year: 'цукцук',
            degree_type: '1',
            email: 'admin@pnnsoft.com',
            password: '123456',
            contact_phone: 'цук',
            gpa: '234',
            publications_count: '234',
            prospective_supervisor: '234',
            distinctive_awards: '234',
            additional_info: '234',
            role: '0'
        };

        apiRequestService.registerUser(defaultFormData);
    }, []);

    return (
        <>
            <Header />
                <Login />
            <Footer />
        </>
    );
};

export default HomeComponent;