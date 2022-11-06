import React from 'react';
import Footer from './shared/footer.jsx';
import Header from './shared/header.jsx';
import NavBar from './shared/nav-bar.jsx';
import RouterOutlet from './shared/router-outlet.jsx';

export default function App() {
  return (
    <div className="app">
      <Header className={ 'app__header' }/>
      <NavBar className={ 'app_nav-bar' }/>
      <main className={ 'app__main' }>
        <RouterOutlet/>
      </main>
      <Footer className={ 'app__footer' }/>
    </div>
  );
}
