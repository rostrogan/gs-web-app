import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import FormAddSubject from "./FormAddSubject";
import {reduxForm} from "redux-form";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  BtnCenter: {
    margin: '0 auto',
    "&:hover": {
      color: '#fff',
    }
  }
});

const FormSubject = reduxForm({ form: "FormAddSubject" })(FormAddSubject);

export default function AlertDialogSlide() {
  const classes = useStyles();


  const onSubmit = (formData) => {
    console.log(formData);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Додати предмет
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormSubject onSubmit={onSubmit}>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  variant={"contained"}
                  color="primary"
                  className={classes.BtnCenter}
                >
                  Закрити
                </Button>
              </DialogActions>
            </FormSubject>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}