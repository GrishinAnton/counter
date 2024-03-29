import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import React from 'react';
import { GetEntityDto, EntityAction } from 'api';

import { Grid } from 'components/ui/Grid/Grid';
import { Typography } from 'components/ui/Typography/Typography';
import { InformationBlock } from './InformationBlock/InformationBlock';
import { SettingsBlock } from './SettingsBlock/SettingsBlock';
import { ButtonBlock } from './ButtonBlock/ButtonBlock';
import { updateEntityDecrement, updateEntityIncrement } from '../../../features/entity/api';
import { Notification } from '../Notification/Notification';
import { ErrorNotification } from '../ErrorNotification/ErrorNotification';
import EntityStore from '../../../store/EntityStore';
import { ERoutes } from '../../../router/config';
import { useNavigate } from 'react-router-dom';

interface IProps {
  entity: GetEntityDto;
}

export const CounterCard: React.FC<IProps> = ({ entity }) => {
  const navigation = useNavigate();

  const handleButtonCountClick = async () => {
    if (entity.action === EntityAction.Increment) {
      try {
        await updateEntityIncrement({ id: String(entity.id) });
        EntityStore.incEntity(entity.id);
        Notification({ message: 'Обновлено' });
      } catch (e) {
        ErrorNotification(e);
      }
    } else {
      try {
        await updateEntityDecrement({ id: String(entity.id) });
        EntityStore.decEntity(entity.id);
        Notification({ message: 'Обновлено' });
      } catch (e) {
        ErrorNotification(e);
      }
    }
  };

  const handleSettingsButtonOnClick = () => navigation(`${ERoutes.VIEW_ENTITY}/${entity.id}`);

  return (
    <CounterBlock>
      <Grid
        container
        direction='column'
        alignItems='center'
        sx={{
          padding: theme => theme.spacing(1),
          backgroundColor: theme => theme.palette.primary.light,
          borderRadius: theme => theme.spacing(1),
        }}
      >
        <Typography sx={{ marginBottom: theme => theme.spacing(1), color: '#fff' }}>{entity.name}</Typography>
        <Grid container direction='row' spacing={1}>
          {/* Основной блок */}
          <Grid item xs={8}>
            <Grid container direction='column'>
              {/* Верхний блок */}
              <InformationBlock startDate={entity.startDate} finishDate={entity.finishDate} />
              {/* Блок с иконками */}
              <SettingsBlock onClick={handleSettingsButtonOnClick} />
            </Grid>
          </Grid>
          {/* Блок с кнопкой */}
          <Grid item xs={4}>
            <ButtonBlock onClick={handleButtonCountClick} count={entity.value} />
          </Grid>
        </Grid>
      </Grid>
    </CounterBlock>
  );
};
