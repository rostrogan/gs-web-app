import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import RegistrationForm from "./components/RegistrationForm/index";
import {reduxForm, formValueSelector } from "redux-form";
import userRegistrationService from '../../services/userRegistrationService';
import {connect} from "react-redux";
import * as State from '../../state/ducks/index';
import {compose} from "recompose";

const useStyles = makeStyles(theme => ({
    Title: {
        fontWeight: '300',
        margin: '0',
        padding: '10px 8px',
        fontSize: '20px',
        color: '#000'
    },
}));

const selector = formValueSelector('registration'); // <-- same as form name

const mapStateToProps = (state: State) => {
   return {
       name: selector(state, 'name'),
       surname: selector(state, 'surname'),
       patronymic: selector(state, 'patronymic'),
       sex: selector(state, 'sex'),
       birthDate: selector(state, 'birth_date'),

       specialty: selector(state, 'specialty'),
       faculty: selector(state, 'faculty'),
       department: selector(state, 'department'),

       graduationUniversity: selector(state, 'graduation_university'),
       graduationYear: selector(state, 'graduation_year'),
       // isHonorsDegree: selector(state, 'isHonorsDegree'),
       email: selector(state, 'email'),
       contactPhone: selector(state, 'contact_phone'),
       isHostelNeeded: selector(state, 'isHostelNeeded'),
       gpa: selector(state, 'gpa'),
       publicationsCount: selector(state, 'publications_count'),
       prospectiveSupervisor: selector(state, 'prospective_supervisor'),
       distinctiveAwards: selector(state, 'distinctive_awards'),
       additionalInfo: selector(state, 'additional_info'),

   }
};

const hoc = compose(
  connect(mapStateToProps),
  reduxForm({form: 'registration'}),
);

const FormRegistration = hoc(RegistrationForm);

const onSubmit = (formData) => {
    userRegistrationService.registerStudent(formData);
};

const RegistrationFormComponent = () => {
    const classes = useStyles();
    return (
        <div className="page-container">
            <div className="container registration">
                <Card>
                    <CardContent>
                        <Typography className={classes.Title} variant="h2" color="initial" component={'h2'}>
                            Для Абітурієнтів
                        </Typography>
                        <FormRegistration onSubmit={onSubmit} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default RegistrationFormComponent;
