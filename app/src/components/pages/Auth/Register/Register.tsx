import React from 'react';
import { useHistory } from 'react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';

import _ from 'lodash';
import { Button } from '../../../ui/Button/Button';
import { AuthForm } from '../Ui/AuthForm';
import {
  emailValidation,
  passwordValidation,
  passwordValidationConfirm,
} from '../../../../common/validation/validationSchema';
import { register } from '../../../../features/auth/api';
import { CreateUserDto } from '../../../../api';
import { EAuthType } from '../Auth';
import { setData } from '../../../../common/utils/localStorage';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';

const schema = object().shape({
  email: emailValidation,
  password: passwordValidation,
  passwordConfirmation: passwordValidationConfirm,
});

export const Register = () => {
  const history = useHistory();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmitRegister = async (data: CreateUserDto) => {
    try {
      const params = _.pick(data, ['email', 'password']);

      const registerData = await register({ createUserDto: params });

      if (registerData && registerData.token) {
        setData('token', registerData.token);
        history.push('/');
      }
    } catch (e) {
      ErrorNotification(e);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitRegister)}>
          <AuthForm type={EAuthType.REGISTER} />
        </form>
      </FormProvider>

      <Button color='primary' variant='contained' size='large' onClick={methods.handleSubmit(onSubmitRegister)}>
        Зарегистрироваться
      </Button>
    </>
  );
};
