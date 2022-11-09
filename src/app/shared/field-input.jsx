import React from 'react';
import { FIELD_TYPE } from '../constants/field-type.jsx';
import { setContainerClassName } from '../utils/attributs.jsx';

export default function FieldInput({ ...props }) {
  const fieldKey = props?.fieldKey;
  const disabled = props?.disabled;
  const fieldType = props?.fieldType;
  const fieldValue = props?.fieldValue;
  const onChange = props?.onChange;
  const onFocus = props?.onFocus;
  const placeholder = props?.placeholder;
  const options = props.options;
  const max = props?.max;
  const min = props?.min;
  const rows = props.rows;
  const cols = props.cols;
  const step = props?.step;

  function getInput() {
    const standardAttributes = {
      ...setContainerClassName(props, 'field-input'),
      id: fieldKey,
      name: fieldKey,
      type: fieldType,
      value: fieldValue,
      disabled: disabled,
      placeholder: placeholder || null,
      onChange: onChange,
      onFocus: onFocus,
    };
    switch (props?.fieldType) {
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
        return <input { ...standardAttributes }/>;
      }

      case FIELD_TYPE.NUMBER:
      case FIELD_TYPE.RANGE: {
        return <input { ...standardAttributes }
                      min={ min || 0 }
                      max={ max || 100 }
                      step={ step || 1 }/>;
      }
      case FIELD_TYPE.TEXTAREA:
        return <textarea { ...standardAttributes }
                         cols={ cols }
                         rows={ rows || 5 }/>;
      case FIELD_TYPE.FILE:
      case FIELD_TYPE.RADIO:
        break;

      case FIELD_TYPE.SELECT: {
        return <select { ...standardAttributes }>
          {
            options?.map((option) => {
              return (<option key={ option?.label }
                              value={ option?.value } { ...option.props }>
                { option?.label }
              </option>);
            })
          }
        </select>;
      }

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
