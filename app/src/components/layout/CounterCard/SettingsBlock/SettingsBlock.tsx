import React from 'react';
import { Grid } from 'components/ui/Grid/Grid';
import { IconButton } from 'components/ui/IconButton/IconButton';
import { Settings } from '@mui/icons-material';

interface IProp {
  onClick: () => void;
}

export const SettingsBlock: React.FC<IProp> = ({ onClick }) => {
  return (
    <Grid
      container
      direction='row'
      sx={{
        width: '100%',
        height: '100%',
        maxHeight: 34,
        borderRadius: theme => theme.spacing(1 / 2),
        border: '1px solid #fff',
        marginTop: theme => theme.spacing(1),
      }}
    >
      <IconButton sx={{ padding: 5 }} onClick={onClick}>
        <Settings />
      </IconButton>
    </Grid>
  );
};
