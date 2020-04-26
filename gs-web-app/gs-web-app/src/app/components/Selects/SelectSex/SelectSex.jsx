import React from "react";
import {Field} from "redux-form";
import {renderSelectField} from "../../Inputs/Input";
import {requiredFile} from "../../../utils/validate";

const SelectSexComponent = () => {
  const sexList = [
    'ч',
    'ж',
  ];
  return (
    <Field
      component={renderSelectField}
      name="sex"
      label="Стать"
      validate={requiredFile}
    >
      <option />
      {sexList.map((sexItem, index) => {
        return (
          <option key={index} value={sexItem}>{sexItem}</option>
        )
      })}
    </Field>
  );
};

export default SelectSexComponent;
