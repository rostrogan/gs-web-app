import * as React from "react";

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Field} from "redux-form";
import ReduxFormDateRange, {renderCheckbox, renderField} from '../../../components/Inputs/Input';
import {requiredFile} from '../../../utils/validate';

const useStyles = makeStyles({
  BtnCenter: {
    margin: '0 auto',
    "&:hover": {
      color: '#fff',
    }
  }
});

const FormMarkAddComponent = (props) => {
  const classes = useStyles();
  const {handleSubmit, pristine, submitting, children} = props;

  // @ts-ignore
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <br/>
        <Field
          name='dataMark'
          component={ReduxFormDateRange}
          placeholder='01/01/2000'
          label='Дата'
          validate={requiredFile}
        />
      </div>
      <div>
        <br/>
        <Field
          component={renderField}
          label="Оцінка"
          type="number"
          variant="outlined"
          name="rating"
          placeholder="Оцінка"
          validate={requiredFile}
        />
      </div>
      <br/>
      <Field
        component={renderCheckbox}
        name="isMissing"
        label="Був відсутній"
        type="boolean"
        validate={requiredFile}
      />
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
          Доадати
        </Button>
      </div>
    </form>
  )
};

export default FormMarkAddComponent;
