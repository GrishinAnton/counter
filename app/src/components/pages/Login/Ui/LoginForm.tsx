import React, { useMemo } from 'react';
import { IFormField } from '../../../../common/types/common.types';
import { ControllerTextField } from '../../../layout/ControllerComponent/ControllerInput/ControllerTextField';

export const LoginForm = () => {
  const loginForm: IFormField[] = useMemo(
    () => [
      {
        label: 'Логин',
        name: 'login',
        type: 'text',
        required: true,
        placeholder: 'Введите логин',
        fieldType: 'input',
        disabled: false,
      },
      {
        label: 'Пароль',
        name: 'password',
        type: 'text',
        required: true,
        placeholder: 'Введите пароль',
        fieldType: 'input',
        disabled: false,
      },
    ],
    [],
  );

  return (
    <>
      {loginForm.map(field => (
        <ControllerTextField key={field.name} fieldProp={field} />
      ))}
    </>
  );
};
