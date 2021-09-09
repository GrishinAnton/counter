import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import UserStore from '../../../store/UserStore';
import { CounterBlock } from '../../ui/ContainerBlock/ContainerBlock';
import { Button } from '../../ui/Button/Button';
import { ERoutes } from '../../../router/config';
import { LoginForm } from './Ui/LoginForm';
import { validationString } from '../../../common/validation/validationSchema';
import { login } from '../../../features/auth/api';
import { CreateUserDto } from '../../../api';

const schema = object().shape({
  login: validationString,
  password: validationString,
});

export const Login = observer(() => {
  const history = useHistory();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmitLogin = async () => {
    try {
      const createUserDto: CreateUserDto = {
        email: '123@123.RU',
        password: '1232212',
      };
      const loginData = await login({ createUserDto });

      console.log(loginData, 'loginData');
    } catch (e) {
      throw Error('Произошла ошибка при входе');
    } finally {
      history.push(ERoutes.HOME);
    }
  };

  return (
    <CounterBlock contentPosition='center'>
      <Box display='flex' flexDirection='column' justifyContent='center'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitLogin)}>
            <LoginForm />
          </form>
        </FormProvider>

        <Button color='primary' variant='contained' size='large' onClick={methods.handleSubmit(onSubmitLogin)}>
          Войти
        </Button>
      </Box>
    </CounterBlock>
  );
});
