import { Grid } from '@material-ui/core';
import { CounterBlock } from 'components/ui/ContainerBlock/ContainerBlock';
import React from 'react';
import { GetEntityDto } from 'api';

import { Typography } from 'components/ui/Typography/Typography';
import { counterCardUseStyles } from './styles';
import { InformationBlock } from './InformationBlock/InformationBlock';
import { SettingsBlock } from './SettingsBlock/SettingsBlock';
import { ButtonBlock } from './ButtonBlock/ButtonBlock';

interface IProps {
  entity: GetEntityDto;
}

export const CounterCard: React.FC<IProps> = ({ entity }) => {
  const classesContainer = counterCardUseStyles();

  // const handleButtonCountClick = () => updateEntityCounter({ id: entity.id, action: entity.action });

  return (
    <CounterBlock>
      <Grid container direction='column' alignItems='center' className={classesContainer.container}>
        <Typography className={classesContainer.title}>{entity.name}</Typography>
        <Grid container direction='row' spacing={1}>
          {/* Основной блок */}
          <Grid item xs={8}>
            <Grid container direction='column'>
              {/* Верхний блок */}
              <InformationBlock />
              {/* Блок с иконками */}
              <SettingsBlock />
            </Grid>
          </Grid>
          {/* Блок с кнопкой */}
          <Grid item xs={4}>
            <ButtonBlock onClick={() => console.log('click')} count={Number(entity.startValue)} />
          </Grid>
        </Grid>
      </Grid>
    </CounterBlock>
  );
};
