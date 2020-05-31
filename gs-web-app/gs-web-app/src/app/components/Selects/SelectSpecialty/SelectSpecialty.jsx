import React from "react";
import {Field} from "redux-form";
import {renderSelectField} from "../../Inputs/Input";
import {requiredFile} from "../../../utils/validate";

const SelectSpecialtyComponent = () => {
  const specialtyList = [
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
      name="specialty"
      label="Спеціальність"
      placeholder='Спеціальність'
      validate={requiredFile}
    >
      <option/>
      {
        specialtyList.map((specialtyName,index) => {
          return (
            <option key={index} value={index}>{specialtyName}</option>
          )
        })
      }
    </Field>
  );
};

export default SelectSpecialtyComponent;
