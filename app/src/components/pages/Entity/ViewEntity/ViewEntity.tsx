import React, { useEffect, useState } from 'react';
import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationString } from 'common/validation/validationSchema';
import { ERoutes } from 'router/config';
import { observer } from 'mobx-react-lite';
import { IconButton } from 'components/ui/IconButton/IconButton';
// import Archive from '@material-ui/icons/Archive';
// import FileCopy from '@material-ui/icons/FileCopy';
import { Edit, Save, Close, DeleteForever } from '@mui/icons-material';
import { Modal } from 'components/ui/Modal/Modal';
// import { Box } from 'components/ui/Box/Box';
import { ModalFooter } from 'components/ui/Modal/ModalFooter';
import { Grid } from 'components/ui/Grid/Grid';

import { Notification } from 'components/layout/Notification/Notification';
import { EActionType, IActionType } from 'common/types/common.types';
import { createEntityStyles } from '../common/styles/styles';
import { EntityForm } from '../Ui/EntityForm';
import { Header } from '../Ui/Header';
import { IViewEntityFields } from '../../../../common/types/entity.types';
import { EntityAction, UpdatedEntityDto } from '../../../../api';
import { deleteEntity, getEntityById, updateEntity } from '../../../../features/entity/api';
import EntityStore from '../../../../store/EntityStore';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import { FooterWithPrimaryButton as FooterWithPrimaryButton } from '../../../ui/FooterWithPrimaryButton/FooterWithButtons';
import { Typography } from '../../../ui/Typography/Typography';
import { EntityFactory } from '../common/factory/factory';

const schema = object().shape({
  name: validationString,
  value: validationString,
});

// TODO Мы должны уметь просматривать, редактировать, удалять, клонировать,

const ViewEntity = observer(() => {
  const classes = createEntityStyles();
  const history = useHistory();
  const { id }: { id: string | undefined } = useParams();

  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState<keyof IActionType>(EActionType.VIEW);
  const [saveButtonVisible, setSaveButtonVisible] = useState(false);

  const methods = useForm<IViewEntityFields>({
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
      reset(EntityFactory.viewEntityTransform(EntityStore.entity));
    }
  }, [reset, EntityStore.entity]);

  const onSubmit = async (data: IViewEntityFields) => {
    try {
      const params: UpdatedEntityDto = {
        ...data,
        value: Number(data.value),
        startDate: String(data.startDate.toISOString()),
        finishDate: data.finishDate ? String(data.finishDate.toISOString()) : undefined,
      };
      await updateEntity({ updatedEntityDto: params });

      EntityStore.setEntity(params);
      setSaveButtonVisible(false);
      setType(EActionType.VIEW);
      Notification({ message: 'Сущность обнавлена' });
    } catch (e) {
      ErrorNotification(e);
    }
  };

  const handleOnClickDelete = async () => {
    if (EntityStore.entity) {
      try {
        await deleteEntity(String(EntityStore.entity.id));
        history.push(ERoutes.HOME);
        Notification({ message: 'Сущность удалена' });
      } catch (e) {
        ErrorNotification(e);
      }
    }
    setModalVisible(false);
  };
  // const handleOnClickArchive = () => console.log('archive');
  // const handleOnClickCopy = () => console.log('copy');
  const handleOnClickEdit = () => {
    setSaveButtonVisible(true);
    setType(EActionType.EDIT);
  };

  const handleOnClickEditCancel = () => {
    setSaveButtonVisible(false);
    setType(EActionType.VIEW);
    if (EntityStore.entity) reset(EntityFactory.viewEntityTransform(EntityStore.entity));
  };

  const handleModalClose = () => setModalVisible(false);
  const handleModalOpen = () => setModalVisible(true);

  return (
    <>
      <Grid container className={classes.container}>
        <Header title='Просмотр сущности' />
        <CounterBlock>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <EntityForm type={type} />
            </form>
          </FormProvider>
        </CounterBlock>
        <FooterWithPrimaryButton
          primaryButtonVisible={saveButtonVisible}
          primaryButtonIcon={<Save />}
          onClick={methods.handleSubmit(onSubmit)}
        >
          {/* <Box display='flex' justifyContent='space-between' width='100%'> */}
          <IconButton size='large' onClick={handleModalOpen}>
            <DeleteForever />
          </IconButton>
          {/* 
          // TODO пока не понятно что с архивом делать
          <IconButton size='large' onClick={handleOnClickArchive}>
            <Archive />
          </IconButton> 
          */}
          {/* 
            <IconButton size='large' onClick={handleOnClickCopy}>
              <FileCopy />
            </IconButton> 
            */}
          <IconButton size='large' onClick={saveButtonVisible ? handleOnClickEditCancel : handleOnClickEdit}>
            {saveButtonVisible ? <Close /> : <Edit />}
          </IconButton>
          {/* </Box> */}
        </FooterWithPrimaryButton>
      </Grid>
      <Modal open={modalVisible}>
        <Typography> Удалить сущность?</Typography>
        <ModalFooter onCancelClick={handleModalClose} onOkClick={handleOnClickDelete} />
      </Modal>
    </>
  );
});

export default ViewEntity;
