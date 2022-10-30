import { Backdrop, CircularProgress, BackdropProps } from '@mui/material';

export const Loading = ({ open }: BackdropProps) => {
  return (
    <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1, color: 'GREY', backgroundColor: '#fff' }} open={open}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
