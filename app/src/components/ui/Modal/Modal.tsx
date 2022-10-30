import { Dialog, DialogProps } from '@mui/material';
import { Box } from '../Box/Box';

export const Modal = ({ ...rest }: DialogProps) => (
  <Dialog {...rest}>
    <Box padding='40px' paddingBottom='20px'>
      {rest.children}
    </Box>
  </Dialog>
);
