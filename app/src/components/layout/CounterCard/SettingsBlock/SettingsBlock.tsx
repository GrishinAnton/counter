import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { settingsBlockUseStyles } from '../styles';

interface IProp {
  onClick: () => void;
}

export const SettingsBlock: React.FC<IProp> = ({ onClick }) => {
  const classes = settingsBlockUseStyles();

  return (
    <Grid container direction='row' className={classes.container}>
      <IconButton className={classes.button} onClick={onClick}>
        <SettingsIcon />
      </IconButton>
    </Grid>
  );
};
