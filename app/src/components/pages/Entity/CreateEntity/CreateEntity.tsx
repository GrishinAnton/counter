import React from 'react';
import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import { Grid } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationString } from 'common/validation/validationSchema';
import { ERoutes } from 'router/config';
import { v4 as uuidv4 } from 'uuid';

import { notification } from 'components/layout/Notification/notification';
import { createEntityStyles } from '../common/styles/styles';
import { Form } from '../Ui/Form';
import { Header } from '../Ui/Header';
import { Footer } from '../Ui/Footer';
import { EActions } from '../../../../features/config';
import { EEntityAction, IEntityFields } from '../../../../common/types/entity.types';

const schema = object().shape({
  name: validationString,
  startValue: validationString,
});

const CreateEntity = () => {
  const classes = createEntityStyles();
  const history = useHistory();

  const methods = useForm<IEntityFields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      startDate: new Date(),
      endDate: null,
      time: false,
      startValue: '',
      action: EEntityAction.INCREMENT,
    },
  });

  const onSubmit = (data: IEntityFields) => {
    const params = {
      id: uuidv4(),
      ...data,
    };

    // appendData(EActions.GET_COUNTS, params);
    history.push(ERoutes.HOME);
    notification({ message: 'Сущность добавлена' });
  };

  return (
    <Grid container className={classes.container}>
      <Header />
      <CounterBlock>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Form />
          </form>
        </FormProvider>
      </CounterBlock>
      <Footer onSubmitForm={methods.handleSubmit(onSubmit)} />
    </Grid>
  );
};

export default CreateEntity;
