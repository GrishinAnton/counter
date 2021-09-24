import { Box } from '@material-ui/core';
import React, { useMemo } from 'react';
import { IFormField } from '../../../../common/types/common.types';
import { ControllerTextField } from '../../../layout/ControllerComponent/ControllerInput/ControllerTextField';

export const LoginForm = () => {
  const loginForm: IFormField[] = useMemo(
    () => [
      {
        label: 'Email',
        name: 'email',
        type: 'text',
        required: true,
        placeholder: 'Введите email',
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
        <Box mb={2} key={field.name}>
          <ControllerTextField fieldProp={field} />
        </Box>
      ))}
    </>
  );
};
