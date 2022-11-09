import React from 'react';
import { FIELD_TYPE } from '../constants/field-type.jsx';
import FieldGroup from '../shared/field-group.jsx';
import Title from '../shared/title.jsx';
import { setContainerClassName } from '../utils/attributs.jsx';
import maxLength from '../validators/max-length.jsx';
import minLength from '../validators/min-length.jsx';
import required from '../validators/required.jsx';

export default function HomeSetting({ formValue, handleSubmit, handleFieldChange, ...props }) {
  const formKeys = { title: 'title', fake: 'fake', fake2: 'fake2', select: 'select' };

  return (
    <form { ...setContainerClassName(props, `home-setting form`) }
          onSubmit={ handleSubmit }>

      {/* ====COLUMN TITLE==== */ }
      <Title level={ 2 }
             className={ 'mb--1' }>
        Settings
      </Title>{/* ===/COLUMN TITLE==== */ }

      <fieldset>
        <legend>General information</legend>

        {/* ====FIELD GROUP TITLE==== */ }
        <FieldGroup fieldValue={ formValue[ formKeys.title ] }
                    fieldKey={ formKeys.title }
                    fieldLabel={ 'Form title' }
                    fieldType={ FIELD_TYPE.TEXT }
                    onChange={ handleFieldChange }
                    validators={ [
                      required(),
                      minLength(3),
                      maxLength(64)
                    ] }/>{/* ===/FIELD GROUP TITLE==== */ }

        {/* ====FIELD GROUP FAKE==== */ }
        <FieldGroup fieldType={ FIELD_TYPE.PASSWORD }
                    max={ 1000 }
                    step={ 5 }
                    fieldKey={ formKeys.fake }
                    fieldLabel={ 'Fake field' }
                    fieldValue={ formValue[ formKeys.fake ] }
                    onChange={ handleFieldChange }
                    validators={ [ maxLength(64) ] }/>{/* ===/FIELD GROUP FAKE==== */ }

        {/* ====FIELD GROUP FAKE2==== */ }
        <FieldGroup fieldType={ FIELD_TYPE.DATE }
                    fieldKey={ formKeys.fake2 }
                    fieldLabel={ 'Fake field 2' }
                    fieldValue={ formValue[ formKeys.fake2 ] }
                    disabled={ true }
                    onChange={ handleFieldChange }/>{/* ===/FIELD GROUP FAKE2==== */ }

        {/* ====FIELD GROUP SELECT==== */ }
        <FieldGroup fieldType={ FIELD_TYPE.SELECT }
                    fieldKey={ formKeys.select }
                    fieldLabel={ 'My select test' }
                    fieldValue={ formValue[ formKeys.select ] }
                    disabled={ false }
                    onChange={ handleFieldChange }
                    options={ [ { value: true, label: 'OUI' }, { value: false, label: 'NON' }, {
                      value: '',
                      label: 'I dont know',
                      props: { disabled: true }
                    }, ] }
                    validators={ [ required() ] }
        />{/* ===/FIELD GROUP SELECT==== */ }
      </fieldset>
    </form>
  );
}

