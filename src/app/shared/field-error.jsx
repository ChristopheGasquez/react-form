import React from 'react';
import { setContainerClassName } from '../utils/attributs.jsx';

export default function FieldError({ error, ...props }) {

  return (
    <span { ...setContainerClassName(props, 'field-error') }>
      error: {error.error}
    </span>
  );
}
