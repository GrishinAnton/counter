import Dialog, { DialogProps } from '@mui/material/Dialog';
import React from 'react';
import { Box } from '../Box/Box';

export const Modal: React.FC<DialogProps> = ({ ...rest }) => (
  <Dialog {...rest}>
    <Box padding='40px' paddingBottom='20px'>
      {rest.children}
    </Box>
  </Dialog>
);
