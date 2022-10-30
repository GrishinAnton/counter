import React from 'react';
import { AppBar } from 'components/ui/AppBar/AppBar';
import { Typography } from 'components/ui/Typography/Typography';
import { IconButton } from 'components/ui/IconButton/IconButton';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface IProps {
  title: string;
}

export const Header: React.FC<IProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <AppBar>
      <IconButton edge='start' color='inherit' onClick={() => navigate(-1)}>
        <ArrowBack />
      </IconButton>
      <Typography>{title}</Typography>
    </AppBar>
  );
};
