import * as React from "react";
import styles from "./LoginForm.module.scss";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Field } from "redux-form";
import { renderField } from "../../../../../components/Inputs/Input";
import {emailError, passwordLoginError} from "../../../../../utils/validate";

const useStyles = makeStyles({
    BtnCenter: {
        margin: '0 auto',
        "&:hover": {
            color: '#fff',
        }
    }
});

const LoginFormComponent = (props) => {
    const classes = useStyles();
    const { handleSubmit, pristine, submitting, invalid } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.Wrapper}>
                <Field
                    component={renderField}
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    placeholder="test@gmail.com"
                    validate={emailError}
                />
            </div>
            <div className={styles.Wrapper}>
                <Field
                    component={renderField}
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    name="password"
                    placeholder="*****"
                    validate={passwordLoginError}
                />
            </div>
            <div className={styles.Wrapper}>
                <Button
                    type="submit"
                    disabled={invalid || submitting || pristine}
                    variant={"contained"}
                    color="primary"
                    className={classes.BtnCenter}
                >
                    Увійти
                </Button>
            </div>
        </form>
    )
};

export default LoginFormComponent;
