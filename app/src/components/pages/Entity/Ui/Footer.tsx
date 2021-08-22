import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AppBar } from 'components/ui/AppBar/AppBar';
import { createEntityStyles } from '../common/styles/styles';

interface IProps {
  onSubmitForm: () => void;
}

export const Footer: React.FC<IProps> = ({ onSubmitForm }) => {
  const classes = createEntityStyles();
  return (
    <AppBar className={classes.appBar} position='fixed'>
      <Fab color='secondary' className={classes.fabButton} onClick={onSubmitForm}>
        <AddIcon />
      </Fab>
    </AppBar>
  );
};
