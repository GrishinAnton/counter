import { ButtonBase as UiButtonBase, ButtonBaseProps } from '@material-ui/core';
import React from 'react';

export const ButtonBase: React.FC<ButtonBaseProps> = ({ children, ...rest }) => (
  <UiButtonBase {...rest}>{children}</UiButtonBase>
);
