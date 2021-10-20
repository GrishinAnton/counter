import React from 'react';
import { AppBar } from 'components/ui/AppBar/AppBar';
import { Typography } from 'components/ui/Typography/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import { IconButton } from 'components/ui/IconButton/IconButton';

interface IProps {
  title: string;
}

export const Header: React.FC<IProps> = ({ title }) => {
  const history = useHistory();

  return (
    <AppBar>
      <IconButton edge='start' color='inherit' onClick={() => history.goBack()}>
        <ArrowBack />
      </IconButton>
      <Typography>{title}</Typography>
    </AppBar>
  );
};
