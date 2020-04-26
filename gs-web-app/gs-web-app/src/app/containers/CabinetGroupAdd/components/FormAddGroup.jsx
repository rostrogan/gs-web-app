import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Field} from 'redux-form';
import {renderField} from '../../../components/Inputs/Input';
import {requiredFile} from '../../../utils/validate';
import {makeSelectFacultiesData} from '../../../state/selectors/global';
import SelectFacultyComponent from "../../../components/Selects/SelectFaculty";
import SelectDepartmentComponent from "../../../components/Selects/SelectDepartment";

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
  const {handleSubmit, pristine, submitting} = props;

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

      <SelectFacultyComponent/>
      <br/>
      <div>
        <SelectDepartmentComponent/>
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
