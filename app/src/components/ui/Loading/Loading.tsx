import React from 'react';
import { Backdrop, CircularProgress, BackdropProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'GREY',
    backgroundColor: '#fff',
  },
}));

export const Loading: React.FC<BackdropProps> = ({ open }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
