import React from "react";
import {Field} from "redux-form";
import {renderSelectField} from "../../Inputs/Input";
import {requiredFile} from "../../../utils/validate";

const SelectStudyComponent = () => {
  const studyList= [
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
      name="study_form"
      label="Форма навчання"
      validate={requiredFile}
    >
      <option />
      {
        studyList.map((studyName,index) => {
          return (
            <option key={index} value={index}>{studyName}</option>
          )
        })
      }
    </Field>
  );
};

export default SelectStudyComponent;
