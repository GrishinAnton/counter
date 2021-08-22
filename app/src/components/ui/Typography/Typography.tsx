import { Typography as UiTypography, TypographyProps } from '@material-ui/core';
import React from 'react';

interface IProps {}

export const Typography: React.FC<IProps & TypographyProps> = ({ children, ...rest }) => (
  <UiTypography {...rest}>{children}</UiTypography>
);
