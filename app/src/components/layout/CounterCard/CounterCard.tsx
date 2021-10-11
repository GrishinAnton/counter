import { Grid } from '@material-ui/core';
import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import React from 'react';
import { GetEntityDto, EntityAction } from 'api';
import { useHistory } from 'react-router';

import { Typography } from 'components/ui/Typography/Typography';
import { counterCardUseStyles } from './styles';
import { InformationBlock } from './InformationBlock/InformationBlock';
import { SettingsBlock } from './SettingsBlock/SettingsBlock';
import { ButtonBlock } from './ButtonBlock/ButtonBlock';
import { updateEntityDecrement, updateEntityIncrement } from '../../../features/entity/api';
import { Notification } from '../Notification/Notification';
import { ErrorNotification } from '../ErrorNotification/ErrorNotification';
import EntityStore from '../../../store/EntityStore';
import { ERoutes } from '../../../router/config';

interface IProps {
  entity: GetEntityDto;
}

export const CounterCard: React.FC<IProps> = ({ entity }) => {
  const classesContainer = counterCardUseStyles();
  const history = useHistory();

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

  const handleSettingsButtonOnClick = () => history.push(`${entity.id}${ERoutes.VIEW_ENTITY}`);

  return (
    <CounterBlock>
      <Grid container direction='column' alignItems='center' className={classesContainer.container}>
        <Typography className={classesContainer.title}>{entity.name}</Typography>
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
