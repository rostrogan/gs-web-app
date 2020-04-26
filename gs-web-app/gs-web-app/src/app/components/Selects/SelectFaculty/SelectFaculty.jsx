import React from "react";
import {Field} from "redux-form";
import {renderSelectField} from "../../Inputs/Input";
import {requiredFile} from "../../../utils/validate";

const SelectFacultyComponent = () => {
  const facultyList = [
    '33 - Філософія',
    '32 - Історія та археологія',
    '33 - Філософія',
    '35 - Філологія',
    '51 - Економіка',
    '53 - Психологія',
  ];
  return (
    <Field
      component={renderSelectField}
      name="faculty"
      label="Факультет"
      validate={requiredFile}
    >
      <option />
      {
        facultyList.map((facultyName,index) => {
          return (
            <option key={index} value={index}>{facultyName}</option>
          )
        })
      }
    </Field>
  );
};

export default SelectFacultyComponent;
