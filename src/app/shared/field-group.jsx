import React, { useEffect, useReducer, useState } from 'react';
import { VALIDATOR_NAME } from '../constants/validator-key.jsx';
import { setContainerClassName } from '../utils/attributs.jsx';
import FieldHelper from './field-helper.jsx';
import FieldInput from './field-input.jsx';

export default function FieldGroup({ ...props }) {
  const fieldKey = props?.fieldKey;
  const fieldLabel = props?.fieldLabel;
  const fieldValue = props?.fieldValue;

  const [ validators ] = useReducer((state) => ({ ...state }), props.validators);

  const [ errors, setErrors ] = useState([]);
  const [ wasFocused, setWasFocused ] = useState(false);

  useEffect(() => {
    setErrors(validators?.filter(v => v(fieldValue)?.error) || []);
  }, [ fieldValue, validators ]);

  function isRequiredValidator() {
    return validators?.some(v => v?.key === VALIDATOR_NAME.REQUIRED);
  }

  function getContainerClass() {
    return 'field-group' +
      (wasFocused && errors.length ? ' field-group--error' : '') +
      (wasFocused && !errors.length ? ' field-group--success' : '');
  }

  return (
    <div { ...setContainerClassName(props, getContainerClass()) }>

      {/* ====LABEL==== */ }
      <label className={ 'field-group__label' }
             htmlFor={ fieldKey }>
        { fieldLabel } { isRequiredValidator() ? '*' : null }
      </label>{/* ===/LABEL==== */ }

      {/* ====INPUT==== */ }
      <FieldInput className={ 'field-group__input' }
                  onFocus={ () => setWasFocused(true) }
                  { ...props } />{/* ===/INPUT==== */ }

      {/* ====HELPERS==== */ }
      { (!wasFocused || !errors?.length) && <span className={ 'field-group__alert' }>
          <FieldHelper validators={ validators }/>
        </span> }{/* ===/HELPERS==== */ }

      {/* ====ERRORS==== */ }
      { (wasFocused && !!errors?.length) && <span className={ 'field-group__alert field-group__error' }>
          <FieldHelper validators={ errors }/>
        </span> }{/* ===/ERRORS==== */ }
    </div>
  );
}
