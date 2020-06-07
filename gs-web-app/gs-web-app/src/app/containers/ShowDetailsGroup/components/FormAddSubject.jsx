import * as React from "react";

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Field} from "redux-form";
import {renderField} from '../../../components/Inputs/Input';
import {requiredFile} from '../../../utils/validate';
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

const FormAddSubjectComponent = (props) => {
  const classes = useStyles();
  const {handleSubmit, pristine, submitting, children, invalid} = props;

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
      <SelectFacultyComponent/>
      </div>
      <br/>
      <div>
        <SelectDepartmentComponent/>
      </div>
      <br/>
      <div style={{display: "flex", alignItems: "center"}}>
        {children}
        <Button
          type="submit"
          disabled={pristine || submitting || invalid}
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
