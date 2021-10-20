import { Box as UiBox, BoxProps } from '@material-ui/core';
import React from 'react';

export const Box: React.FC<BoxProps> = ({ children, ...rest }) => <UiBox {...rest}>{children}</UiBox>;
