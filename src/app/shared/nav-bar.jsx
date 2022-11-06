import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { setContainerClassName } from '../utils/attributs.jsx';

export default function NavBar(props) {
  const links = [
    { path: '/', label: 'Home', match: useMatch('/') },
    { path: '/about', label: 'About', match: useMatch('/about') },
  ];
  const linksItems = links.map(({ path, label, match }, index) => {
    return (
      <li key={ index }
          className={ 'nav-bar__list__item ' + (match ? 'nav-bar__list__item--active' : '') }>
        <Link className={ 'link link--as-text' }
              to={ path }>
          { label }
        </Link>
      </li>
    );
  });

  return (
    <nav { ...setContainerClassName(props, 'nav-bar') }>
      <ul className={ 'nav-bar__list' }>
        { linksItems }
      </ul>
    </nav>
  );
}
