import { FormControlLabel, FormControlLabelProps, Radio as UiRadio } from '@material-ui/core';
import React from 'react';

interface IProps {
  label: string;
}

export const Radio: React.FC<IProps & Omit<FormControlLabelProps, 'control'>> = ({ ...rest }) => (
  <FormControlLabel {...rest} control={<UiRadio />} />
);
