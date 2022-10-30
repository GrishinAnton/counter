import React from 'react';
import { format } from 'date-fns';
import { Grid } from 'components/ui/Grid/Grid';
import { Box } from 'components/ui/Box/Box';
import { Typography } from '../../../ui/Typography/Typography';
import { Business } from '@mui/icons-material';

interface IProps {
  startDate: string;
  finishDate?: string;
}

export const InformationBlock: React.FC<IProps> = ({ startDate = new Date(), finishDate }) => {
  return (
    <Grid
      container
      direction='row'
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 50,
        borderRadius: theme => theme.spacing(1 / 2),
        color: '#fff',
        border: '1px solid #fff',
      }}
    >
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box sx={{ color: '#fff', margin: 'auto' }}>
            <Business />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Grid item>
          <Typography>{`старт: ${format(new Date(startDate), 'dd.MM')}`}</Typography>
        </Grid>
        <Grid item>
          <Typography>
            {`окончание: `}
            {finishDate ? format(new Date(finishDate), 'dd.MM') : 'нет срока'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
