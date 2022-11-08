import React from 'react';
import { FIELD_TYPE } from '../constants/field-type.jsx';
import { setContainerClassName } from '../utils/attributs.jsx';

export default function FieldInput({ fieldKey, fieldType, fieldValue, onChange, ...props }) {

  function getInput() {
    switch (fieldType) {
      case FIELD_TYPE.COLOR:
      case FIELD_TYPE.DATE:
      case FIELD_TYPE.DATE_TIME_LOCAL:
      case FIELD_TYPE.EMAIL:
      case FIELD_TYPE.HIDDEN:
      case FIELD_TYPE.MONTH:
      case FIELD_TYPE.PASSWORD:
      case FIELD_TYPE.SEARCH:
      case FIELD_TYPE.TEL:
      case FIELD_TYPE.TEXT:
      case FIELD_TYPE.TIME:
      case FIELD_TYPE.URL:
      case FIELD_TYPE.WEEK: {
        return <input { ...setContainerClassName(props, 'field-input') }
                      id={ fieldKey }
                      name={ fieldKey }
                      type={ fieldType }
                      value={ fieldValue }
                      onChange={ onChange }
                      placeholder={ props?.placeholder || null }/>;
      }

      case FIELD_TYPE.NUMBER:
      case FIELD_TYPE.RANGE: {
        return <input className={ 'field-set__input' }
                      id={ fieldKey }
                      name={ fieldKey }
                      type={ fieldType }
                      value={ fieldValue }
                      onChange={ onChange }
                      placeholder={ props?.placeholder || null }
                      min={ props?.min || 0 }
                      max={ props?.max || 100 }
                      step={ props?.step || 1 }/>;
      }
      case FIELD_TYPE.TEXTAREA:
      case FIELD_TYPE.FILE:
      case FIELD_TYPE.RADIO:
        break;

      case FIELD_TYPE.RESET:
      case FIELD_TYPE.SUBMIT:
        break;
      default: {
        return <p>Champs pas encore implémenté</p>;
      }
    }
  }

  return (
    <>
      { getInput() }
    </>
  );
}
