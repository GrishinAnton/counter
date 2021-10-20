import React from 'react';
import { makeStyles } from '@material-ui/core';
import { MAX_WIDTH } from 'theme';
import { Box } from '../Box/Box';

export const containerStyles = makeStyles(() => ({
  root: {
    maxWidth: MAX_WIDTH,
    width: '100%',
    height: '100vh',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid red',
  },
}));

export const ContainerApp: React.FC = ({ children }) => {
  const classes = containerStyles();
  return <Box className={classes.root}>{children}</Box>;
};
