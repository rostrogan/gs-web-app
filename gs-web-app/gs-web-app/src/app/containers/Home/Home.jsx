import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from './components/Login'
import apiRequestService from '../../services/api/apiRequestService';
import {makeSelectUserData} from '../../state/selectors/user';

const mapStateToProps = createStructuredSelector({
    userData: makeSelectUserData(),
});

const HomeComponent = ({userData}) => {
    useEffect(() => {
        const defaultFormData = {
            surname: 'Строган',
            name: 'Роман',
            patronymic: 'Сергійович',
            sex: 'ч',
            birth_date: 'Thu Mar 12 2020 21:44:00 GMT+0200 (Eastern European Standard Time',
            create_date: new Date().getDate(),
            specialty: '1',
            faculty: '1',
            department: '3',
            study_form: '1',
            pay_form: '1',
            foreign_language: '2',
            graduation_university: 'КПІ',
            graduation_year: '2020',
            degree_type: '1',
            email: 'rostrogan@gmail.com',
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
            <Header/>
            <Login userData={userData}/>
            <Footer/>
        </>
    );
};

export default connect(mapStateToProps)(HomeComponent);
