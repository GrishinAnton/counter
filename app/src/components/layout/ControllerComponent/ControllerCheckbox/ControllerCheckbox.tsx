import { IFormField } from 'common/types/common.types';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from 'components/ui/Checkbox/Checkbox';
import { CheckboxProps } from '@mui/material';

interface IProps extends CheckboxProps {
  fieldProp: IFormField;
}

export const ControllerCheckbox = ({ fieldProp, ...rest }: IProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldProp.name}
      control={control}
      render={({ field: { value, ref, ...other } }) => (
        <Checkbox
          {...other}
          checked={value}
          inputRef={ref}
          disabled={fieldProp.disabled || rest.disabled}
          label={fieldProp.label}
          required={fieldProp.required}
        />
      )}
    />
  );
};
