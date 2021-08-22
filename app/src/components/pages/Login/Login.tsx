import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router';
import UserStore from '../../../store/UserStore';
import { CounterBlock } from '../../ui/ContainerBlock/ContainerBlock';
import { Button } from '../../ui/Button/Button';
import { ERoutes } from '../../../router/config';

const Login = observer(() => {
  const history = useHistory();
  console.log('login');

  const handleSignIn = async () => {
    try {
      await UserStore.signIn();
    } catch (e) {
      throw Error('Произошла ошибка при входе');
    } finally {
      history.push(ERoutes.HOME);
    }
  };

  return (
    <CounterBlock contentPosition='center'>
      <Box display='flex' justifyContent='center'>
        <Button color='primary' variant='contained' onClick={handleSignIn}>
          Войти
        </Button>
      </Box>
    </CounterBlock>
  );
});

export default Login;
