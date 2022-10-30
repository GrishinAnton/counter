import { Toolbar } from '@mui/material';
import { Box } from '../Box/Box';

interface IProps {
  className?: string;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  children: React.ReactNode;
}

export const AppBar = ({ children, className = '', position = 'relative' }: IProps) => {
  return (
    <Box
      sx={[
        {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: position,
          zIndex: 10,
          backgroundColor: theme => theme.palette.info.dark,
          color: '#fff',
        },
        { top: 'auto', bottom: 0, maxWidth: 'inherit', width: 'inherit' },
      ]}
      className={className}
    >
      <Toolbar>{children}</Toolbar>
    </Box>
  );
};
