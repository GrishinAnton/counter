import { Button } from 'components/ui/Button/Button';
import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import React, { useState } from 'react';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { Box } from '../../ui/Box/Box';

export enum EAuthType {
  LOGIN = 'login',
  REGISTER = 'register',
}

export const Auth = () => {
  const [authType, setAuthType] = useState<EAuthType>(EAuthType.LOGIN);

  const onChangeAuthForm = () => {
    if (authType === EAuthType.REGISTER) {
      setAuthType(EAuthType.LOGIN);
    } else {
      setAuthType(EAuthType.REGISTER);
    }
  };

  return (
    <CounterBlock contentPosition='center'>
      <Box display='flex' flexDirection='column' justifyContent='center' width='100%' marginTop='auto'>
        {authType === EAuthType.LOGIN ? <Login /> : <Register />}
      </Box>
      <Box marginTop='auto'>
        <Button variant='text' onClick={onChangeAuthForm}>
          {authType === EAuthType.LOGIN ? 'Зарегистрироваться' : 'Войти'}
        </Button>
      </Box>
    </CounterBlock>
  );
};
