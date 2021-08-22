import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { settingsBlockUseStyles } from '../styles';

export const SettingsBlock = () => {
  const classes = settingsBlockUseStyles();

  return (
    <Grid container direction='row' className={classes.container}>
      <IconButton className={classes.button}>
        <SettingsIcon />
      </IconButton>
    </Grid>
  );
};
