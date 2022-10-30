import { observer } from 'mobx-react-lite';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import UserStore from 'store/UserStore';
import { setDataToLocalStorage } from 'common/utils/localStorage';

import { Button } from '../../../ui/Button/Button';
import { AuthForm } from '../Ui/AuthForm';
import { emailValidation, passwordValidation } from '../../../../common/validation/validationSchema';
import { login } from '../../../../features/auth/api';
import { CreateUserDto } from '../../../../api';
import { EAuthType } from '../Auth';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from 'router/config';

const schema = object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export const Login = observer(() => {
  const navigate = useNavigate();

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
        UserStore.setUser(loginData);
        setDataToLocalStorage('user', loginData);
        navigate(ERoutes.HOME);
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
