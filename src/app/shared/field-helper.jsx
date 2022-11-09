import React from 'react';
import { setContainerClassName } from '../utils/attributs.jsx';

export default function FieldHelper({ validators = [], ...props }) {
  const fieldMessages = validators.map((v, index) => {
      return <span key={ index } { ...setContainerClassName(props, 'field-helper') }>
        { v?.message }
        { index < validators?.length - 1 ? ', ' : '.' }
      </span>;
    }
  );

  return (
    <>
      { fieldMessages }
    </>
  );
}
