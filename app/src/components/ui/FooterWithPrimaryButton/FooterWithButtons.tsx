import React, { ReactNode } from 'react';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { createEntityStyles } from '../../pages/Entity/common/styles/styles';
import { AppBar } from '../AppBar/AppBar';

interface IProps {
  onClick: () => void;
  primaryButtonVisible?: boolean;
  primaryButtonIcon?: ReactNode;
}

export const FooterWithPrimaryButton: React.FC<IProps> = ({
  onClick,
  children,
  primaryButtonVisible = true,
  primaryButtonIcon = <Add />,
}) => {
  const classes = createEntityStyles();
  return (
    <AppBar className={classes.appBar} position='fixed'>
      {children}
      {primaryButtonVisible && primaryButtonIcon && (
        <Fab color='secondary' className={classes.fabButton} onClick={onClick}>
          {primaryButtonIcon}
        </Fab>
      )}
    </AppBar>
  );
};
