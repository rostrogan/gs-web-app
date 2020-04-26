import * as React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Field } from "redux-form";
import {renderField} from '../../../components/Inputs/Input';
import { requiredFile} from '../../../utils/validate';
import SelectFacultyComponent from "../../../components/Selects/SelectFaculty";
import SelectDepartmentComponent from "../../../components/Selects/SelectDepartment";

const useStyles = makeStyles({
  BtnCenter: {
    margin: '0 auto',
    "&:hover": {
      color: '#fff',
    }
  }
});

const FormAddTeachers = (props) => {
  const classes = useStyles();
  const { handleSubmit, pristine, submitting } = props;

  // @ts-ignore
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <br/>
        <Field
          component={renderField}
          label="ПІБ викладача"
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
          component={renderField}
          label="Email викладача"
          type="email"
          variant="outlined"
          name="email"
          placeholder="Назви груп"
          validate={requiredFile}
        />
      </div>
      <br/>
      <div>
        <Field
          component={renderField}
          label="Пароль для викладача"
          type="password"
          variant="outlined"
          name="name_group"
          placeholder="Назви груп"
          validate={requiredFile}
        />
      </div>
      <br/>
      <div >
        <SelectFacultyComponent/>
      </div>
      <br/>
      <div>
        <SelectDepartmentComponent/>
      </div>
      <br/>
      <div>
        <Button
          type="submit"
          disabled={pristine || submitting}
          variant={"contained"}
          color="primary"
          className={classes.BtnCenter}
        >
          Доадати Викладача
        </Button>
      </div>
    </form>
  )
};

export default FormAddTeachers;
