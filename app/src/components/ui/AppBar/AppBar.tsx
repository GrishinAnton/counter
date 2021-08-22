import React from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
import cx from 'classnames';

const appBarStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: ({ position }: { position: IProps['position'] }) => position,
    zIndex: 10,
    backgroundColor: theme.palette.info.dark,
    color: '#fff',
  },
}));

interface IProps {
  className?: string;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
}

export const AppBar: React.FC<IProps> = ({ children, className = '', position = 'relative' }) => {
  const classes = appBarStyles({ position });
  return (
    <div className={cx(classes.root, className)}>
      <Toolbar>{children}</Toolbar>
    </div>
  );
};
