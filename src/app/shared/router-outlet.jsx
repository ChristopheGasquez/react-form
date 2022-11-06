import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../modules/about.jsx';
import Home from '../modules/home.jsx';
import NotFound from '../modules/not-found.jsx';

export default function RouterOutlet() {
  const routesSettings = [
    { path: '/about', element: <About/> },
    { path: '', element: <Home/> },
    { path: '*', element: <NotFound/> },
  ];
  const routeItems = routesSettings.map(({ path, element }) => {
    return (
      <Route key={ path }
             path={ path }
             element={ element }/>
    );
  });

  return (
    <Routes>
      { routeItems }
    </Routes>
  );
}
