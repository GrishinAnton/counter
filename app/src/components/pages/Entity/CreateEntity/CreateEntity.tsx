import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import { FormProvider, useForm } from 'react-hook-form';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { dateStartValidation, validationString } from 'common/validation/validationSchema';
import { ERoutes } from 'router/config';
import { observer } from 'mobx-react-lite';
import { EActionType } from 'common/types/common.types';

import { Notification } from 'components/layout/Notification/Notification';
import { Grid } from 'components/ui/Grid/Grid';
import { EntityForm } from '../Ui/EntityForm';
import { Header } from '../Ui/Header';
import { IEntityFields } from '../../../../common/types/entity.types';
import { CreateEntityDto, EntityAction } from '../../../../api';
import { createEntity } from '../../../../features/entity/api';
import EntityStore from '../../../../store/EntityStore';
import { ErrorNotification } from '../../../layout/ErrorNotification/ErrorNotification';
import { FooterWithPrimaryButton } from '../../../ui/FooterWithPrimaryButton/FooterWithButtons';
import { useNavigate } from 'react-router-dom';
import { MAX_WIDTH } from 'theme';

const schema = object().shape({
  name: validationString,
  value: validationString,
  startDate: dateStartValidation,
});

const CreateEntity = observer(() => {
  const navigate = useNavigate();

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
        navigate(ERoutes.HOME);
        Notification({ message: 'Сущность добавлена' });
      }
    } catch (e) {
      ErrorNotification(e);
    }
  };

  return (
    <Grid container sx={{ maxWidth: MAX_WIDTH }}>
      <Header title='Добавьте сущность' />
      <CounterBlock>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <EntityForm type={EActionType.CREATE} />
          </form>
        </FormProvider>
      </CounterBlock>
      <FooterWithPrimaryButton onClick={methods.handleSubmit(onSubmit)} />
    </Grid>
  );
});

export default CreateEntity;
