import React from 'react';
import { Backdrop, CircularProgress, BackdropProps } from '@mui/material';
import { MAX_WIDTH } from 'theme';

export const Loading: React.FC<BackdropProps> = ({ open }) => (
  <Backdrop sx={{ color: 'GREY', backgroundColor: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
    <CircularProgress color='inherit' />
  </Backdrop>
);
