import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DateFnsUtils from "@date-io/date-fns";
import {uk} from "date-fns/locale";

const renderFromHelper = ({touched, error}) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
};

export const renderField = ({
    input,
    label,
    name,
    type,
    variant,
    className,
    meta: {touched, invalid, error},
    ...custom
  }) => (
  <FormControl error={touched && error} className={className}>
    <TextField
      label={label}
      variant={variant}
      type={type}
      name={name}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  </FormControl>
);

export const renderTextArea = ({
   label,
   placeholder,
   name,
   type,
   input,
   meta: {touched, invalid, error},
   ...custom
 }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      placeholder={placeholder}
      name={name}
      type={type}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};

export const renderCheckbox = ({
     input,
     label,
     name,
   }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
        name={name}
      />
    }
    label={label}
  />
);

export const
    renderSelectField = ({
      input,
      label,
      inputLabel,
      labelWidth,
      meta: {touched, error, invalid},
      children,
      ...custom
    }) => {
  return (
    <FormControl error={touched && error} variant="outlined">
      <InputLabel>
        {label}
      </InputLabel>
      <Select
        native
        {...input}
        {...custom}
        label={label}
        error={touched && invalid}
        helperText={touched && error}
      >
        {children}
      </Select>
      {renderFromHelper({touched, error})}
    </FormControl>
  )
};

const renderDateTimePicker = (
  {
    input: {onChange, value},
    meta: {touched, error},
    placeholder,
    name,
    label,
  }) =>
  <FormControl error={touched && error} variant="outlined">
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={uk}>
      <KeyboardDatePicker
        onChange={onChange}
        format="dd/MM/yyyy"
        inputVariant="outlined"
        value={!value ? null : new Date(value)}
        placeholder={placeholder}
        name={name}
        label={label}
      />
    </MuiPickersUtilsProvider>
    {renderFromHelper({touched, error})}
  </FormControl>;

export default renderDateTimePicker;


