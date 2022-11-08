import React from 'react';
import { setContainerClassName } from '../utils/attributs.jsx';

export default function Title({ level, children, ...props }) {
  const containerClassName = setContainerClassName(props, `title title--${ level || 3 }`);

  return React.createElement(
    `h${ level || 3 }`,
    { ...containerClassName, children }
  );
}
