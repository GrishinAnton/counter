import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import { Button } from '../../../ui/Button/Button';
import { AuthForm } from '../Ui/AuthForm';
import { emailValidation, passwordValidationConfirm } from '../../../../common/validation/validationSchema';
import { login } from '../../../../features/auth/api';
import { CreateUserDto } from '../../../../api';
import { EAuthType } from '../Auth';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import { setData } from '../../../../common/utils/localStorage';

const schema = object().shape({
  email: emailValidation,
  password: passwordValidationConfirm,
});

export const Login = observer(() => {
  const history = useHistory();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitLogin = async (data: CreateUserDto) => {
    try {
      const loginData = await login({ createUserDto: data });
      if (loginData && loginData.token) {
        setData('token', loginData.token);
        history.push('/');
      }
    } catch (e) {
      ErrorNotification(e);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitLogin)}>
          <AuthForm type={EAuthType.LOGIN} />
        </form>
      </FormProvider>

      <Button color='primary' variant='contained' size='large' onClick={methods.handleSubmit(onSubmitLogin)}>
        Войти
      </Button>
    </>
  );
});
