import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AppBar } from 'components/ui/AppBar/AppBar';
import { createEntityStyles } from './styles/styles';

interface IProps {
  onClick: () => void;
}

export const FooterWithPrimaryButton: React.FC<IProps> = ({ onClick, children }) => {
  const classes = createEntityStyles();
  return (
    <AppBar className={classes.appBar} position='fixed'>
      {children}
      <Fab color='secondary' className={classes.fabButton} onClick={onClick}>
        <AddIcon />
      </Fab>
    </AppBar>
  );
};
