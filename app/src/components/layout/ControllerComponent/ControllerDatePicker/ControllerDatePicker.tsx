import React from 'react';
import { IFormField } from 'common/types/common.types';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from 'components/ui/DatePicker/DatePicker';
import { KeyboardDatePickerProps } from '@material-ui/pickers';

interface IProps {
  fieldProp: IFormField;
}

export const ControllerDatePicker: React.FC<IProps & Omit<KeyboardDatePickerProps, 'onChange' | 'value'>> = ({
  fieldProp,
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldProp.name}
      control={control}
      render={({ field: { ref, ...other } }) => (
        <DatePicker
          {...other}
          innerRef={ref}
          disabled={fieldProp.disabled || rest.disabled}
          fullWidth
          placeholder={fieldProp.placeholder}
          id={fieldProp.name}
          label={fieldProp.label}
          required={fieldProp.required}
        />
      )}
    />
  );
};
