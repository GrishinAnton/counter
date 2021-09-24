import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import { Button } from '../../../ui/Button/Button';
import { LoginForm } from '../Ui/LoginForm';
import { emailValidation, validationString } from '../../../../common/validation/validationSchema';
import { login } from '../../../../features/auth/api';
import { CreateUserDto } from '../../../../api';

const schema = object().shape({
  email: emailValidation,
  password: validationString,
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
    } catch (e) {
      throw Error('Произошла ошибка при входе');
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitLogin)}>
          <LoginForm />
        </form>
      </FormProvider>

      <Button color='primary' variant='contained' size='large' onClick={methods.handleSubmit(onSubmitLogin)}>
        Войти
      </Button>
    </>
  );
});
