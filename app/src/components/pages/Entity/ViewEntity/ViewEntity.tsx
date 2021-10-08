import React from 'react';
import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import { Grid } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationString } from 'common/validation/validationSchema';
import { ERoutes } from 'router/config';
import { observer } from 'mobx-react-lite';
import { IconButton } from 'components/ui/IconButton/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Archive from '@material-ui/icons/Archive';
import FileCopy from '@material-ui/icons/FileCopy';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';

import { Notification } from 'components/layout/Notification/Notification';
import { EActionType } from 'common/types/common.types';
import { createEntityStyles } from '../common/styles/styles';
import { EntityForm } from '../Ui/EntityForm';
import { Header } from '../Ui/Header';
import { IEntityFields } from '../../../../common/types/entity.types';
import { CreateEntityDto, CreateEntityDtoActionEnum } from '../../../../api';
import { createEntity } from '../../../../features/entity/api';
import EntityStore from '../../../../store/EntityStore';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import { FooterWithPrimaryButton as FooterWithPrimaryButton } from '../../../ui/FooterWithPrimaryButton/FooterWithButtons';

const schema = object().shape({
  name: validationString,
  value: validationString,
});

// TODO Мы должны уметь просматривать, редактировать, удалять, архивировать, клонировать,

const ViewEntity = observer(() => {
  const classes = createEntityStyles();
  const history = useHistory();
  const { id }: { id: string | undefined } = useParams();

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
      <Header title='Просмотр сущности' />
      <CounterBlock>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <EntityForm type={EActionType.VIEW} />
          </form>
        </FormProvider>
      </CounterBlock>
      <FooterWithPrimaryButton onClick={methods.handleSubmit(onSubmit)}>
        <IconButton size='large'>
          <DeleteForever />
        </IconButton>
        <IconButton size='large'>
          <Archive />
        </IconButton>
        <IconButton size='large'>
          <FileCopy />
        </IconButton>
        <IconButton size='large'>
          <Edit />
        </IconButton>
        <IconButton size='large'>
          <Save />
        </IconButton>
      </FooterWithPrimaryButton>
    </Grid>
  );
});

export default ViewEntity;
