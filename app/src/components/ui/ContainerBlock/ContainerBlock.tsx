import { Box } from '../Box/Box';

interface IProps {
  contentPosition?: 'center' | 'default';
  children?: React.ReactNode;
}

export const CounterBlock = ({ children, contentPosition = 'default' }: IProps) => {
  return (
    <Box
      sx={[
        { padding: 2, width: '100%' },
        contentPosition === 'center' && {
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      {children}
    </Box>
  );
};
