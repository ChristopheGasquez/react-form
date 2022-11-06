import React from 'react';
import { setContainerClassName } from '../utils/attributs.jsx';

export default function Footer(props) {
  return (
    <footer { ...setContainerClassName(props, `footer`) }>
      <aside>
        (c) Crispi
      </aside>
    </footer>
  );
}
