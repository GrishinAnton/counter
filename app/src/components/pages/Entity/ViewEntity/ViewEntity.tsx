import React, { useEffect, useState } from 'react';
import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import { FormProvider, useForm } from 'react-hook-form';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationString } from 'common/validation/validationSchema';
import { ERoutes } from 'router/config';
import { observer } from 'mobx-react-lite';
import { IconButton } from 'components/ui/IconButton/IconButton';
import { Modal } from 'components/ui/Modal/Modal';
import { ModalFooter } from 'components/ui/Modal/ModalFooter';
import { Grid } from 'components/ui/Grid/Grid';

import { Notification } from 'components/layout/Notification/Notification';
import { EActionType, IActionType } from 'common/types/common.types';
import { EntityForm } from '../Ui/EntityForm';
import { Header } from '../Ui/Header';
import { IViewEntityFields } from '../../../../common/types/entity.types';
import { EntityAction, UpdatedEntityDto } from '../../../../api';
import { deleteEntity, getEntityById, updateEntity } from '../../../../features/entity/api';
import EntityStore from '../../../../store/EntityStore';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import { FooterWithPrimaryButton } from '../../../ui/FooterWithPrimaryButton/FooterWithButtons';
import { Typography } from '../../../ui/Typography/Typography';
import { EntityFactory } from '../common/factory/factory';
import { useNavigate, useParams } from 'react-router-dom';
import { Close, DeleteForever, Edit, Save } from '@mui/icons-material';
import { MAX_WIDTH } from 'theme';

const schema = object().shape({
  name: validationString,
  value: validationString,
});

// TODO Мы должны уметь просматривать, редактировать, удалять, клонировать,

const ViewEntity = observer(() => {
  const navigate = useNavigate();
  const { id } = useParams();

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
          EntityStore.entity && reset(EntityFactory.viewEntityTransform(EntityStore.entity));
        };

        loadData();
      } catch (e) {
        ErrorNotification(e);
      }
    }
  }, [id, reset]);

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
        navigate(ERoutes.HOME);
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
      <Grid container sx={{ maxWidth: MAX_WIDTH }}>
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
          <IconButton size='medium' onClick={handleModalOpen}>
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
          <IconButton size='medium' onClick={saveButtonVisible ? handleOnClickEditCancel : handleOnClickEdit}>
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
