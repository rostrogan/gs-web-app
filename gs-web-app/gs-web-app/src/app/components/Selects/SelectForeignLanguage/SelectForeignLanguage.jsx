import React from "react";
import {Field} from "redux-form";
import {renderSelectField} from "../../Inputs/Input";
import {requiredFile} from "../../../utils/validate";

const SelectForeignLanguageComponent = () => {
  const foreignLanguageList= [
    '33 - Італійська',
    '32 - Українська',
    '33 - Італійська',
    '32 - Українська',
    '32 - Українська',
    '33 - Англійська',
    '35 - Іспанська',
  ];

  return (
    <Field
      label="Іноземна мова"
      name="foreign_language"
      component={renderSelectField}
      validate={requiredFile}
    >
      <option />
      {
        foreignLanguageList.map((foreignLanguageName,index) => {
          return (
            <option key={index} value={index}>{foreignLanguageName}</option>
          )
        })
      }
    </Field>
  );
};

export default SelectForeignLanguageComponent;
