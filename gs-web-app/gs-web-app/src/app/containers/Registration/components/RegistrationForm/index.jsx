import * as React from 'react';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Typography from "@material-ui/core/Typography";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import styles from "./RegistrationForm.module.scss";
import { Field } from "redux-form";
import ReduxFormDateRange, {
    renderCheckbox,
    renderField,
    renderTextArea
} from "../../../../components/Inputs/Input";
import {requiredFile} from "../../../../utils/validate";
import FormControl from "@material-ui/core/FormControl";
import StepLabel from "@material-ui/core/StepLabel";
import Paper from "@material-ui/core/Paper";
import SelectFacultyComponent from "../../../../components/Selects/SelectFaculty";
import SelectSexComponent from "../../../../components/Selects/SelectSex";
import SelectSpecialtyComponent from "../../../../components/Selects/SelectSpecialty";
import SelectDepartmentComponent from "../../../../components/Selects/SelectDepartment";
import SelectStudyComponent from "../../../../components/Selects/SelectStudy";
import SelectPuyComponent from "../../../../components/Selects/SelectPuy";
import SelectForeignLanguageComponent from "../../../../components/Selects/SelectForeignLanguage";
import SelectDegreeTypeComponent from "../../../../components/Selects/SelectDegreeType";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));


const StepContentOne = () => {

    const classes = useStyles();

    return (
        <div className={styles.StepContentOne}>
            <Field
                component={renderField}
                label="Прізвище"
                variant="outlined"
                type="text"
                name="surname"
                placeholder="Сікорський"
                validate={requiredFile}
            />
            <Field
                component={renderField}
                label="І'мя"
                variant="outlined"
                type="text"
                name="name"
                placeholder="Ігор"
                validate={requiredFile}
            />
            <Field
                component={renderField}
                label="По батькові"
                variant="outlined"
                type="text"
                name="patronymic"
                placeholder="Іванович"
                validate={requiredFile}
            />
            <FormControl className={classes.formControl} >
                <SelectSexComponent/>
            </FormControl>
            <div>
                <Field
                    name='birth_date'
                    component={ReduxFormDateRange}
                    placeholder='01/01/2000'
                    label='Дата народження'
                    validate={requiredFile}
                />
            </div>
        </div>
    )
};

const StepContentTwo = () => {
    return (
        <div className={styles.StepContentTwo}>
            <SelectSpecialtyComponent/>
            <SelectFacultyComponent/>
            <SelectDepartmentComponent/>
        </div>
    )
};

const StepContentThree = () => {

    return (
        <div className={styles.StepContentThree}>
            <div className={styles.StepContentThreeItems}>
                <div className={styles.StepContentThreeItem}>
                    <SelectStudyComponent/>
                    <SelectPuyComponent/>
                    <SelectForeignLanguageComponent/>
                </div>
                <div className={styles.StepContentThreeItem}>
                    <Field
                        component={renderField}
                        label="Який ВНЗ закінчив"
                        variant="outlined"
                        type="text"
                        name="graduation_university"
                        placeholder="КПІ"
                        validate={requiredFile}
                    />
                    <Field
                        component={renderField}
                        label="Рік випуску"
                        variant="outlined"
                        type="text"
                        name="graduation_year"
                        placeholder="2019"
                        validate={requiredFile}
                    />
                    <SelectDegreeTypeComponent/>
                    <Field
                        component={renderCheckbox}
                        name="isHonorsDegree"
                        label="з відзнакою"
                        type="boolean"
                        validate={requiredFile}
                    />
                </div>
                <div className={styles.StepContentThreeItem}>
                    <Field
                        component={renderField}
                        label="Email"
                        variant="outlined"
                        type="text"
                        name="email"
                        placeholder="Email"
                        validate={requiredFile}
                    />
                    <Field
                        component={renderField}
                        label="Пароль"
                        variant="outlined"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        validate={requiredFile}
                    />
                    <Field
                        component={renderField}
                        label="Телефон"
                        variant="outlined"
                        type="text"
                        name="contact_phone"
                        placeholder="Телефон"
                        validate={requiredFile}
                    />
                </div>
                <div>
                    <Field
                        component={renderCheckbox}
                        name="isHostelNeeded"
                        label="Потребую місце проживання в гуртожитку на період навчання"
                        variant="outlined"
                        type="boolean"
                        validate={requiredFile}
                    />
                </div>
                <div className={styles.StepContentThreeItem}>
                    <Field
                        component={renderField}
                        label="Середній бал диплому за 100-бальною шкалою"
                        variant="outlined"
                        type="number"
                        name="gpa"
                        placeholder="100"
                        validate={requiredFile}
                    />
                    <Field
                        component={renderField}
                        label="Кількість публікацій"
                        variant="outlined"
                        type="number"
                        name="publications_count"
                        placeholder="0"
                        validate={requiredFile}
                    />
                    <div className={styles.StepContentThreeItem_md}>
                        <Field
                            component={renderField}
                            label="Прізвище передбачуваного наукового керівника"
                            type="text"
                            variant="outlined"
                            name="prospective_supervisor"
                            validate={requiredFile}
                        />
                    </div>
                </div>
                <div className={styles.StepContentThreeItem}>
                    <div className={styles.StepContentThreeItem_lg}>
                        <Field
                            component={renderTextArea}
                            label="Особливі відзнаки (перемоги на олімпіадах, патенти, тощо)"
                            placeholder=''
                            name="distinctive_awards"
                            validate={requiredFile}
                        />
                    </div>
                </div>
                <div className={styles.StepContentThreeItem}>
                    <div className={styles.StepContentThreeItem_lg}>
                        <Field
                            component={renderTextArea}
                            label="Додаткова інформація"
                            placeholder='Стаж роботи, місце роботи, пос'
                            name="additional_info"
                            validate={requiredFile}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

function getSteps() {
    return ['Введіть своє ПІБ', 'Оберіть спеціальність, факультет і кафедру', 'Вкажіть додаткову інформацію'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <StepContentOne/>;
        case 1:
            return <StepContentTwo/>;
        case 2:
            return <StepContentThree/>;
        default:
            return 'Unknown step';
    }
}

const RegistrationForm = (props) => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const { handleSubmit, pristine, submitting, submitSucceeded } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <Typography component={'span'} variant={'body2'}>
                                    {getStepContent(index)}
                                </Typography>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Назад
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Завершити реєстрацію' : 'Дальше'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                      {submitSucceeded &&  <Typography variant={'h5'} component={'h5'}>
                          Ваша заявка на реєстрацію була відправлина
                        </Typography>
                      }
                        {/*Це все буде мінятися на якусь норм логіку*/}
                        {!submitSucceeded ? (
                        <>
                          <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                          >
                              Назад
                          </Button>
                          <Button
                              className={classes.button}
                              color="primary"
                              variant="contained"
                              type="submit" disabled={pristine || submitting}
                          >
                              Відпарвити заявку
                          </Button>
                        </>
                        ):(
                          <Button
                            className={classes.button}
                           href="/"
                           color="primary"
                           variant="contained"
                          >
                            Повернутися на головну
                          </Button>
                        )
                      }
                    </Paper>
                )}
            </div>
        </form>
    )
};

export default RegistrationForm;
