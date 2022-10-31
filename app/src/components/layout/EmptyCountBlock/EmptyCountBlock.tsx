import { Button } from 'components/ui/Button/Button';
import { Typography } from 'components/ui/Typography/Typography';
import { ERoutes } from 'router/config';
import { Box } from 'components/ui/Box/Box';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

export const EmptyCountBlock = memo(() => {
  const navigate = useNavigate();

  return (
    <>
      <Box mb={2}>
        <Typography align='center'>У вас нет сущностей, можно создать.</Typography>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Button color='primary' variant='contained' onClick={() => navigate(ERoutes.CREATE_ENTITY)}>
          Создать сущность
        </Button>
      </Box>
    </>
  );
});
