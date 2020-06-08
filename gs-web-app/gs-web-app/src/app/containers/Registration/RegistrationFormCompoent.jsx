import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import RegistrationForm from "./components/RegistrationForm/index";
import {reduxForm } from "redux-form";
import userRegistrationService from '../../services/userRegistrationService';

const useStyles = makeStyles(theme => ({
    Title: {
        fontWeight: '300',
        margin: '0',
        padding: '10px 8px',
        fontSize: '20px',
        color: '#000'
    },
}));


const FormRegistration = (reduxForm({form: 'registration'}))(RegistrationForm);

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
