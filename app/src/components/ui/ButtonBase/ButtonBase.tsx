import { ButtonBase as UiButtonBase, ButtonBaseProps } from '@mui/material';
import React from 'react';

export const ButtonBase: React.FC<ButtonBaseProps> = ({ children, ...rest }) => (
  <UiButtonBase {...rest}>{children}</UiButtonBase>
);
