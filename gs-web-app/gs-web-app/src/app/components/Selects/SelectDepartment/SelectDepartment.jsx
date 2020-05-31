import React from "react";
import {Field} from "redux-form";
import {renderSelectField} from "../../Inputs/Input";
import {requiredFile} from "../../../utils/validate";

const SelectDepartmentComponent = () => {
  const departmentList = [
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
      name="department"
      label="Кафедра"
      validate={requiredFile}
    >
      <option />
      {
        departmentList.map((departmentName,index) => {
          return (
            <option key={index} value={index}>{departmentName}</option>
          )
        })
      }
    </Field>
  );
};

export default SelectDepartmentComponent;
