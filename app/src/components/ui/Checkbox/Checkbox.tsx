import { Checkbox as UiCheckbox, CheckboxProps, FormControlLabel } from '@material-ui/core';
import React from 'react';

interface IProps {
  label: string;
}

export const Checkbox: React.FC<IProps & CheckboxProps> = ({ ...rest }) => (
  <FormControlLabel control={<UiCheckbox {...rest} color='primary' />} label={rest.label} />
);
