import React from 'react';
import Title from '../shared/title.jsx';
import { setContainerClassName } from '../utils/attributs.jsx';

export default function HomePreview({ formValue, ...props }) {
  return (
    <div { ...setContainerClassName(props, `home-preview`) }>
      {/* ====COLUMN TITLE==== */ }
      <Title level={ 2 }
             className={ 'mb--1' }>
        Preview
      </Title>{/* ===/COLUMN TITLE==== */ }

      <Title>
        { formValue?.title }
      </Title>
    </div>
  );
}
