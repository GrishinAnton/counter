import React, { useMemo } from 'react';
import { Box } from 'components/ui/Box/Box';
import { IFormField } from '../../../../common/types/common.types';
import { ControllerTextField } from '../../../layout/ControllerComponent/ControllerInput/ControllerTextField';
import { EAuthType } from '../Auth';

interface IProps {
  type: EAuthType;
}

export const AuthForm: React.FC<IProps> = ({ type }) => {
  const authForm: IFormField[] = useMemo(
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
      {
        label: 'Повторите пароль',
        name: 'passwordConfirmation',
        type: 'text',
        required: true,
        placeholder: 'Повторите пароль',
        fieldType: 'input',
        disabled: false,
      },
    ],
    [],
  );

  const loginForm = ['email', 'password'];
  const registerForm = [...loginForm, 'passwordConfirmation'];

  return (
    <>
      {authForm.map(field => {
        const form = (
          <Box mb={2} key={field.name}>
            <ControllerTextField fieldProp={field} />
          </Box>
        );
        if (type === EAuthType.LOGIN && loginForm.includes(field.name)) {
          return form;
        }
        if (type === EAuthType.REGISTER && registerForm.includes(field.name)) {
          return form;
        }
      })}
    </>
  );
};
