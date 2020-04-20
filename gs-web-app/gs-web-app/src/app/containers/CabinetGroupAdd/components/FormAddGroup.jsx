import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Field} from 'redux-form';
import {renderField, renderSelectField} from '../../../components/Inputs/Input';
import {requiredFile} from '../../../utils/validate';
import {makeSelectFacultiesData} from '../../../state/selectors/global';

const useStyles = makeStyles({
    BtnCenter: {
        margin: '0 auto',
        '&:hover': {
            color: '#fff',
        }
    }
});

const mapStateToProps = createStructuredSelector({
    faculties: makeSelectFacultiesData(),
});

const FormAddGroup = (props) => {
    const classes = useStyles();
    const {handleSubmit, pristine, submitting, faculties} = props;

    const isFacultiesAvailable = faculties?.length;

    const departmentList = [
        '33 - Філософія',
        '32 - Історія та археологія',
        '33 - Філософія',
        '35 - Філологія',
        '51 - Економіка',
        '53 - Психологія',
    ];

    // @ts-ignore
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <br/>
                <Field
                    component={renderField}
                    label="Назва групи"
                    type="text"
                    variant="outlined"
                    name="name"
                    placeholder="Назви груп"
                    validate={requiredFile}
                />
            </div>
            <br/>
            <div>
                {
                    isFacultiesAvailable &&
                    <Field
                        component={renderSelectField}
                        name="faculty"
                        label="Факультет"
                        validate={requiredFile}
                    >
                        <option/>
                        {
                            faculties.map((faculty) => {
                                const {abbr, _id} = faculty;

                                return <option key={_id} value={_id}>{abbr}</option>;
                            })
                        }
                    </Field>
                }
            </div>
            <br/>
            <div>
                <Field
                    component={renderSelectField}
                    name="department"
                    label="Кафедра"
                    validate={requiredFile}
                >
                    <option/>
                    {
                        departmentList.map((departmentName, index) => {
                            return (
                                <option key={index} value={index}>{departmentName}</option>
                            )
                        })
                    }
                </Field>
            </div>
            <br/>
            <div>
                <Button
                    type="submit"
                    disabled={pristine || submitting}
                    variant={'contained'}
                    color="primary"
                    className={classes.BtnCenter}
                >
                    Доадати групу
                </Button>
            </div>
        </form>
    )
};

export default connect(mapStateToProps)(FormAddGroup);
