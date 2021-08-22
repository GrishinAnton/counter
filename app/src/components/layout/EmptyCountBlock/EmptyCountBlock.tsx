import React from 'react';
import { Box } from '@material-ui/core';
import { Button } from 'components/ui/Button/Button';
import { Typography } from 'components/ui/Typography/Typography';
import { useHistory } from 'react-router';
import { ERoutes } from 'router/config';

export const EmptyCountBlock = () => {
  const history = useHistory();

  return (
    <>
      <Box mb={2}>
        <Typography align='center'>У вас нет сущностей, можно создать.</Typography>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Button color='primary' variant='contained' onClick={() => history.push(ERoutes.CREATE_ENTITY)}>
          Создать сущность
        </Button>
      </Box>
    </>
  );
};
