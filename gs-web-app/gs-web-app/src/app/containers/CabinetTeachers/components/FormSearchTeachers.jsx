import * as React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Field } from "redux-form";
import { renderField} from '../../../components/Inputs/Input';
import { requiredFile} from '../../../utils/validate';

const useStyles = makeStyles({
  BtnCenter: {
    margin: '0 auto',
    "&:hover": {
      color: '#fff',
    }
  }
});

const FormSearchGroupComponent = (props) => {
  const classes = useStyles();
  const { handleSubmit, pristine, submitting } = props;

  // @ts-ignore
  return (
    <form onSubmit={handleSubmit}>
      <div >
        <Field
          component={renderField}
          label="Назва групи"
          type="text"
          name="name_group"
          placeholder="Пошук"
          validate={requiredFile}
        />
      </div>
      <div>
        <Button
          type="submit"
          disabled={pristine || submitting}
          variant={"contained"}
          color="primary"
          className={classes.BtnCenter}
        >
          Пошук
        </Button>
      </div>
    </form>
  )
};

export default FormSearchGroupComponent;
