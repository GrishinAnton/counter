import { Grid as UiGrid, GridProps } from '@material-ui/core';
import React from 'react';

export const Grid: React.FC<GridProps> = ({ children, ...rest }) => <UiGrid {...rest}>{children}</UiGrid>;
