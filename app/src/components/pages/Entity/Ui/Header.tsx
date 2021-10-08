import React from 'react';
import { IconButton } from '@material-ui/core';
import { AppBar } from 'components/ui/AppBar/AppBar';
import { Typography } from 'components/ui/Typography/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';

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
