import React from 'react';
import BusinessIcon from '@material-ui/icons/Business';
import { format } from 'date-fns';
import { Grid } from 'components/ui/Grid/Grid';
import { Box } from 'components/ui/Box/Box';
import { Typography } from '../../../ui/Typography/Typography';
import { informationBlockUseStyles } from '../styles';

interface IProps {
  startDate: string;
  finishDate?: string;
}

export const InformationBlock: React.FC<IProps> = ({ startDate = new Date(), finishDate }) => {
  const classes = informationBlockUseStyles();

  return (
    <Grid container direction='row' className={classes.container}>
      <Grid item xs={3}>
        <Box className={classes.iconContainer}>
          <Box className={classes.icon}>
            <BusinessIcon />
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
