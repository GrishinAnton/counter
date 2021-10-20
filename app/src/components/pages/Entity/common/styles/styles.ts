import { makeStyles } from '@material-ui/core';
import { MAX_WIDTH } from 'theme';

export const createEntityStyles = makeStyles(() => ({
  container: {
    maxWidth: MAX_WIDTH,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    maxWidth: 'inherit',
    width: 'inherit',
  },
}));

// export const StyledEntityAppBar = styled()(() => ({
//   top: 'auto',
//   bottom: 0,
//   maxWidth: 'inherit',
//   width: 'inherit',
// }));
