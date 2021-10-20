import React from 'react';
import { Button as UiButton, ButtonProps } from '@material-ui/core';

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => <UiButton {...rest}>{children}</UiButton>;
