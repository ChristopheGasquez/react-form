import React from 'react';
import useSessionState from '../hooks/use-session-state.jsx';
import Title from '../shared/title.jsx';
import HomePreview from './home-preview.jsx';
import HomeSetting from './home-setting.jsx';

export default function Home() {
  const [ formValue, setForm ] = useSessionState('homeForm', { title: 'My form', fake: '', fake2: '', select: false });

  function handleFieldChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setForm({ ...formValue, [ name ]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function resetFrom() {
    setForm({ title: 'My form', fake: '', fake2: '', select: '' });
  }

  return (
    <div className={ 'home' }>
      <Title level={ 1 }
             className={ 'mb--2' }>
        Create your own form <button className={ 'button' }
                                     onClick={ resetFrom }>Reset</button>
      </Title>
      {/* ====FLEX CONTAINER==== */ }

      <div className={ 'home__container' }>
        {/* ====FLEX COLUMN==== */ }
        <HomeSetting className="home__container__child"
                     formValue={ formValue }
                     handleFieldChange={ handleFieldChange }
                     handleSubmit={ handleSubmit }/>
        {/* ===/FLEX COLUMN==== */ }

        {/* ====FLEX COLUMN==== */ }
        <HomePreview className="home__container__child"
                     formValue={ formValue }/>
        {/* ===/FLEX COLUMN==== */ }
      </div>
      {/* ===/FLEX CONTAINER==== */ }
    </div>
  );
}
