import React from 'react';
import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import { Grid } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationString } from 'common/validation/validationSchema';
import { ERoutes } from 'router/config';
import { observer } from 'mobx-react-lite';

import { Notification } from 'components/layout/Notification/Notification';
import { createEntityStyles } from '../common/styles/styles';
import { Form } from '../Ui/Form';
import { Header } from '../Ui/Header';
import { IEntityFields } from '../../../../common/types/entity.types';
import { CreateEntityDto, CreateEntityDtoActionEnum } from '../../../../api';
import { createEntity } from '../../../../features/entity/api';
import EntityStore from '../../../../store/EntityStore';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import { FooterWithButton } from '../../../ui/FooterWithButton/FooterWithButton';

const schema = object().shape({
  name: validationString,
  value: validationString,
});

const CreateEntity = observer(() => {
  const classes = createEntityStyles();
  const history = useHistory();

  const methods = useForm<IEntityFields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      startDate: new Date(),
      finishDate: null,
      time: false,
      value: '',
      action: CreateEntityDtoActionEnum.Increment,
    },
  });

  const onSubmit = async (data: IEntityFields) => {
    try {
      const params: CreateEntityDto = {
        ...data,
        value: Number(data.value),
        startDate: String(data.startDate.toISOString()),
        finishDate: data.finishDate ? String(data.finishDate.toISOString()) : undefined,
      };
      const createdEntity = await createEntity({ createEntityDto: params });

      if (createdEntity) {
        EntityStore.addEntity(createdEntity);
        history.push(ERoutes.HOME);
        Notification({ message: 'Сущность добавлена' });
      }
    } catch (e) {
      ErrorNotification(e);
    }
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
      <FooterWithButton onClick={methods.handleSubmit(onSubmit)} />
    </Grid>
  );
});

export default CreateEntity;
