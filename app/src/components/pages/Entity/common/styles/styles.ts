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
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

// export const StyledEntityAppBar = styled()(() => ({
//   top: 'auto',
//   bottom: 0,
//   maxWidth: 'inherit',
//   width: 'inherit',
// }));
