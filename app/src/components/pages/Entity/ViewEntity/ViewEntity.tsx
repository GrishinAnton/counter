import React, { useEffect } from 'react';
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
import Box from '@mui/material/Box';

import { Notification } from 'components/layout/Notification/Notification';
import { EActionType } from 'common/types/common.types';
import { createEntityStyles } from '../common/styles/styles';
import { EntityForm } from '../Ui/EntityForm';
import { Header } from '../Ui/Header';
import { IEntityFields } from '../../../../common/types/entity.types';
import { CreateEntityDto, EntityAction } from '../../../../api';
import { createEntity, getEntityById } from '../../../../features/entity/api';
import EntityStore from '../../../../store/EntityStore';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import { FooterWithPrimaryButton as FooterWithPrimaryButton } from '../../../ui/FooterWithPrimaryButton/FooterWithButtons';

const schema = object().shape({
  name: validationString,
  value: validationString,
});

// TODO Мы должны уметь просматривать, редактировать, удалять, клонировать,

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
      action: EntityAction.Increment,
    },
  });

  const { reset } = methods;

  useEffect(() => {
    if (id) {
      try {
        const loadData = async () => {
          const entity = await getEntityById(id);
          EntityStore.setEntity(entity);
        };

        loadData();
      } catch (e) {
        ErrorNotification(e);
      }
    }
  }, [id]);

  useEffect(() => {
    if (EntityStore.entity) {
      const entity: IEntityFields = {
        ...EntityStore.entity,
        value: String(EntityStore.entity.value),
        startDate: new Date(EntityStore.entity.startDate),
        finishDate: EntityStore.entity.finishDate ? new Date(EntityStore.entity.finishDate) : null,
      };
      reset(entity);
    }
  }, [EntityStore.entity]);

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

  const handleOnClickDelete = () => console.log('delete');
  // const handleOnClickArchive = () => console.log('archive');
  const handleOnClickCopy = () => console.log('copy');
  const handleOnClickEdit = () => console.log('edit');

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
      <FooterWithPrimaryButton primaryButtonVisible={false} onClick={methods.handleSubmit(onSubmit)}>
        <Box display='flex' justifyContent='space-between' width='100%'>
          <IconButton size='large' onClick={handleOnClickDelete}>
            <DeleteForever />
          </IconButton>
          {/* 
          // TODO пока не понятно что с архивом делать
          <IconButton size='large' onClick={handleOnClickArchive}>
            <Archive />
          </IconButton> 
          */}
          <IconButton size='large' onClick={handleOnClickCopy}>
            <FileCopy />
          </IconButton>
          <IconButton size='large' onClick={handleOnClickEdit}>
            <Edit />
          </IconButton>
        </Box>
      </FooterWithPrimaryButton>
    </Grid>
  );
});

export default ViewEntity;
