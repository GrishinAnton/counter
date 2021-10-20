import React from 'react';
import { IconButton as IconButtonUi, IconButtonProps } from '@material-ui/core';

interface IProps {
  onClick?: () => void;
}

export const IconButton: React.FC<IProps & IconButtonProps> = ({ onClick, children, ...rest }) => (
  <IconButtonUi {...rest} onClick={onClick && onClick} color='inherit'>
    {children}
  </IconButtonUi>
);
