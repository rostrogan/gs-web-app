import * as React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Field } from "redux-form";
import { renderField} from '../../../components/Inputs/Input';

const useStyles = makeStyles({
  BtnCenter: {
    margin: '0 auto',
    "&:hover": {
      color: '#fff',
    }
  },
  flex: {
    display: 'flex',
  },
});

const FormSearchGroupComponent = (props) => {
  const classes = useStyles();
  const { handleSubmit, pristine, submitting, invalid } = props;

  return (
    <form onSubmit={handleSubmit}>
        <Field
          component={renderField}
          label="Пошук"
          type="text"
          name="name_group"
          placeholder="Пошук"
          className={classes.flex}
        />
      <div>
        <Button
          type="submit"
          disabled={pristine || submitting || invalid}
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
