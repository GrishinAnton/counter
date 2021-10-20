import { makeStyles } from '@material-ui/core';

export const counterCardUseStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(1),
    color: '#fff',
  },
}));

export const buttonBlockUseStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(1 / 2),
  },
  button: {
    border: '1px solid #fff',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
}));

export const settingsBlockUseStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    maxHeight: 34,
    borderRadius: theme.spacing(1 / 2),
    border: '1px solid #fff',
    marginTop: theme.spacing(1),
  },
  button: {
    padding: 5,
  },
}));

export const informationBlockUseStyles = makeStyles(theme => ({
  icon: {
    color: '#fff',
    margin: 'auto',
  },
  iconContainer: {
    display: 'flex',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    minHeight: 50,
    borderRadius: theme.spacing(1 / 2),
    color: '#fff',
    border: '1px solid #fff',
  },
}));
