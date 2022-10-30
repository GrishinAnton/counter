import { FormControlLabel, FormControlLabelProps, Radio as UiRadio } from '@mui/material';
import React from 'react';

interface IProps extends Omit<FormControlLabelProps, 'control'> {
  label: string;
}

export const Radio = ({ ...rest }: IProps) => <FormControlLabel {...rest} control={<UiRadio />} />;
