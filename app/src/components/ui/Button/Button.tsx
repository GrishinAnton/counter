import { Button as UiButton, ButtonProps } from '@material-ui/core';
import React from 'react';

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => <UiButton {...rest}>{children}</UiButton>;
