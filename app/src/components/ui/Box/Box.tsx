import { Box as UiBox, BoxProps } from '@mui/material';
import React from 'react';

export const Box: React.FC<BoxProps> = ({ children, ...rest }) => <UiBox {...rest}>{children}</UiBox>;
