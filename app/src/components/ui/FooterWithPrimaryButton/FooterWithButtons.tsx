import { ReactNode } from 'react';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { AppBar } from '../AppBar/AppBar';

interface IProps {
  onClick: () => void;
  primaryButtonVisible?: boolean;
  primaryButtonIcon?: ReactNode;
  children?: ReactNode;
}

export const FooterWithPrimaryButton = ({
  onClick,
  children,
  primaryButtonVisible = true,
  primaryButtonIcon = <Add />,
}: IProps) => {
  return (
    <AppBar position='fixed'>
      {children}
      {primaryButtonVisible && primaryButtonIcon && (
        <Fab
          color='secondary'
          sx={{ position: 'absolute', zIndex: 1, top: -30, left: 0, right: 0, margin: '0 auto' }}
          onClick={onClick}
        >
          {primaryButtonIcon}
        </Fab>
      )}
    </AppBar>
  );
};
