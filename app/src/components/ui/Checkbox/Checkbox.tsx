import { Checkbox as UiCheckbox, CheckboxProps, FormControlLabel } from '@mui/material';

export interface ICheckboxProps extends CheckboxProps {
  label: string;
}

export const Checkbox = ({ ...rest }: ICheckboxProps) => (
  <FormControlLabel control={<UiCheckbox {...rest} color='primary' />} label={rest.label} />
);
