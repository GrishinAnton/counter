import { makeStyles } from '@material-ui/core';
import React from 'react';
import cx from 'classnames';
import { Box } from '../Box/Box';

const containerBlockStyles = makeStyles(() => ({
  container: {
    padding: 16,
    width: '100%',
  },
  contentCenter: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

// const CssContentCenter = css({
//   display: 'flex',
//   height: '100%',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

interface IProps {
  contentPosition?: 'center' | 'default';
}

export const CounterBlock: React.FC<IProps> = ({ children, contentPosition = 'default' }) => {
  const classes = containerBlockStyles();

  const containerClasses = cx({ [classes.container]: true, [classes.contentCenter]: contentPosition === 'center' });

  return <div className={containerClasses}>{children}</div>;
};
