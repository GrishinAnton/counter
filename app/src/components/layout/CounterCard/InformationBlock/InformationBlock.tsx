import React from 'react';
import { Box, Grid } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import { format } from 'date-fns';
import { informationBlockUseStyles } from '../styles';
import { Typography } from '../../../ui/Typography/Typography';

interface IProps {
  startDate?: string;
  endDate?: string;
}

export const InformationBlock: React.FC<IProps> = ({ startDate = new Date(), endDate = 'нет срока ' }) => {
  const classes = informationBlockUseStyles();

  return (
    <Grid container direction='row' className={classes.container}>
      <Grid item xs={3}>
        <Box className={classes.iconContainer}>
          <Box className={classes.icon}>
            <BusinessIcon />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Grid item>
          <Typography>{`старт: ${format(new Date(startDate), 'dd.MM')}`}</Typography>
        </Grid>
        <Grid item>
          <Typography>{`окончание: ${endDate}`}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
