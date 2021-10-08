import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AppBar } from 'components/ui/AppBar/AppBar';
import { createEntityStyles } from './styles/styles';

interface IProps {
  onClick: () => void;
}

export const FooterWithButton: React.FC<IProps> = ({ onClick }) => {
  const classes = createEntityStyles();
  return (
    <AppBar className={classes.appBar} position='fixed'>
      <Fab color='secondary' className={classes.fabButton} onClick={onClick}>
        <AddIcon />
      </Fab>
    </AppBar>
  );
};
