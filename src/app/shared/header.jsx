import React from 'react';
import { setContainerClassName } from '../utils/attributs.jsx';
import Title from './title.jsx';

export default function Header(props) {
  return (
    <header { ...setContainerClassName(props, `header`) }>
      <Title className={ 'header__title' }
             level={ 2 }>
        My header
      </Title>
    </header>
  );
}
