import React, { useEffect, useState } from 'react';
import { setContainerClassName } from '../utils/attributs.jsx';
import FieldError from './field-error.jsx';
import FieldInput from './field-input.jsx';

export default function FieldGroup({ fieldKey, fieldLabel, fieldType, fieldValue, onChange, validators, ...props }) {
  const [ errors, setErrors ] = useState([]);

  useEffect(() => {
    setErrors(validators?.map((v) => v(fieldValue))?.filter(e => !!e));
  }, [ fieldValue, validators ]);

  return (
    <div { ...setContainerClassName(props, 'field-group') }>
      {/* ====LABEL==== */ }
      <label className={ 'field-group__label' }
             htmlFor={ fieldKey }>
        { fieldLabel }
      </label>{/* ===/LABEL==== */ }

      {/* ====INPUT==== */ }
      <FieldInput className={'field-group__input'}
                  fieldKey={ fieldKey }
                  fieldLabel={ fieldLabel }
                  fieldType={ fieldType }
                  fieldValue={ fieldValue }
                  onChange={ onChange }
                  validators={ validators }
                  props={ props }/>

      {/* ====ERRORS==== */ }
      {
        errors?.map((e) => {
          return <FieldError key={ e.error }
                             error={ e }
                             className={ 'field-group__alert field-group__alert--error' }/>;
        })
      }{/* ===/ERRORS==== */ }
    </div>
  );
}
