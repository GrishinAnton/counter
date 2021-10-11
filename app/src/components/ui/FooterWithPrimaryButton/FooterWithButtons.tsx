import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AppBar } from 'components/ui/AppBar/AppBar';
import { createEntityStyles } from './styles/styles';

interface IProps {
  onClick: () => void;
  primaryButtonVisible?: boolean;
}

export const FooterWithPrimaryButton: React.FC<IProps> = ({ onClick, children, primaryButtonVisible = true }) => {
  const classes = createEntityStyles();
  return (
    <AppBar className={classes.appBar} position='fixed'>
      {children}
      {primaryButtonVisible && (
        <Fab color='secondary' className={classes.fabButton} onClick={onClick}>
          <AddIcon />
        </Fab>
      )}
    </AppBar>
  );
};
