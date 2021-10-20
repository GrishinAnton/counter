import React, { ReactNode } from 'react';
import { Add } from '@mui/icons-material';
import { AppBar, Fab, Toolbar } from '@mui/material';
import styles from './styles.module.css';

interface IProps {
  onClick: () => void;
  primaryButtonVisible?: boolean;
  primaryButtonIcon?: ReactNode;
}

export const FooterWithPrimaryButton: React.FC<IProps> = ({
  onClick,
  children,
  primaryButtonVisible = true,
  primaryButtonIcon = <AddIcon />,
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
