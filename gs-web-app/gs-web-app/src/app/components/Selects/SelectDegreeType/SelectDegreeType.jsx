import React from "react";
import {Field} from "redux-form";
import {renderSelectField} from "../../Inputs/Input";
import {requiredFile} from "../../../utils/validate";

const SelectDegreeTypeComponent = () => {
  const degreeTypeList = [
    'Спеціаліст',
    'Магістр',
  ];
  return (
    <Field
      component={renderSelectField}
      label="Спеціаліст/Магістр"
      variant="outlined"
      type="text"
      name="degree_type"
      validate={requiredFile}
    >
      <option />
      {
        degreeTypeList.map((foreignLanguageName, index) => {
          return (
            <option key={index} value={index}>{foreignLanguageName}</option>
          )
        })
      }
    </Field>
  );
};

export default SelectDegreeTypeComponent;
