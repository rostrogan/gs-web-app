import React from "react";
import {Field} from "redux-form";
import {renderSelectField} from "../../Inputs/Input";
import {requiredFile} from "../../../utils/validate";

const SelectPuyComponent = () => {
  const puyList= [
    '33 - Філософія',
    '32 - Історія та археологія',
    '33 - Філософія',
    '35 - Філологія',
    '51 - Економіка',
    '53 - Психологія',
  ];

  return (
    <Field
      label="Форма оплати"
      name="pay_form"
      component={renderSelectField}
      validate={requiredFile}
    >
      <option />
      {
        puyList.map((puyName, index) => {
          return (
            <option key={index} value={index}>{puyName}</option>
          )
        })
      }
    </Field>
  );
};

export default SelectPuyComponent;
