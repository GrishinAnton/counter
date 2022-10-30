import React from 'react';
import { MAX_WIDTH } from 'theme';
import { Box } from '../Box/Box';

interface IProps {
  children?: React.ReactNode;
}

export const ContainerApp = ({ children }: IProps) => {
  return (
    <Box
      sx={{
        maxWidth: MAX_WIDTH,
        width: '100%',
        height: '100vh',
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid red',
      }}
    >
      {children}
    </Box>
  );
};
