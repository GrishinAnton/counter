import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { Grid } from 'components/ui/Grid/Grid';
import { IconButton } from 'components/ui/IconButton/IconButton';
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
