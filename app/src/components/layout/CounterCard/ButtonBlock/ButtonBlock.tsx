import { Box } from 'components/ui/Box/Box';
import { ButtonBase } from 'components/ui/ButtonBase/ButtonBase';
import React from 'react';

interface IProps {
  onClick: () => void;
  count: number;
}

export const ButtonBlock: React.FC<IProps> = ({ onClick, count }) => {
  return (
    <Box sx={{ width: '100%', height: '100%', borderRadius: theme => theme.spacing(1 / 2) }}>
      <ButtonBase
        sx={[
          {
            width: '100%',
            height: '100%',
            borderRadius: theme => theme.spacing(1 / 2),
          },
          { border: '1px solid #fff', color: '#fff', fontSize: 30, fontWeight: 'bold' },
        ]}
        onClick={() => onClick()}
      >
        {count}
      </ButtonBase>
    </Box>
  );
};
