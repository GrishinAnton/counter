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
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import UserStore from '../../../../store/UserStore';
import { setDataToLocalStorage } from '../../../../common/utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from 'router/config';

const schema = object().shape({
  email: emailValidation,
  password: passwordValidation,
  passwordConfirmation: passwordValidationConfirm,
});

export const Register = () => {
  const navigate = useNavigate();

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
        UserStore.setUser(registerData);
        setDataToLocalStorage('user', registerData);
        navigate(ERoutes.HOME);
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
