import * as React from "react";

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Field} from "redux-form";
import {renderField, renderSelectField} from '../../../components/Inputs/Input';
import {requiredFile} from '../../../utils/validate';

const useStyles = makeStyles({
  BtnCenter: {
    margin: '0 auto',
    "&:hover": {
      color: '#fff',
    }
  }
});

const FormAddSubjectComponent = (props) => {
  const classes = useStyles();
  const {handleSubmit, pristine, submitting, children} = props;
  const facultyList = [
    '33 - Філософія',
    '32 - Історія та археологія',
    '33 - Філософія',
    '35 - Філологія',
    '51 - Економіка',
    '53 - Психологія',
  ];

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
          label="Назва предмету"
          type="text"
          variant="outlined"
          name="name_group"
          placeholder="Назви груп"
          validate={requiredFile}
        />
      </div>
      <div>
        <br/>
        <Field
          component={renderField}
          label="Кількість кредитів"
          type="text"
          variant="outlined"
          name="name_group"
          placeholder="Назви груп"
          validate={requiredFile}
        />
      </div>
      <br/>
      <div>
        <Field
          component={renderSelectField}
          name="faculty"
          label="Семетр"
          validate={requiredFile}
        >
          <option/>
          {
            facultyList.map((facultyName, index) => {
              return (
                <option key={index} value={index}>{facultyName}</option>
              )
            })
          }
        </Field>
      </div>
      <br/>
      <div>
        <Field
          component={renderSelectField}
          name="department"
          label="Викладач"
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
      <div style={{display: "flex", alignItems: "center"}}>
        {children}
        <Button
          type="submit"
          disabled={pristine || submitting}
          variant={"contained"}
          color="primary"
          className={classes.BtnCenter}
        >
          Доадати групу
        </Button>
      </div>
    </form>
  )
};

export default FormAddSubjectComponent;
