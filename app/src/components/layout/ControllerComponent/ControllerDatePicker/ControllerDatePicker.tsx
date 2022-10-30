import React from 'react';
import { IFormField } from 'common/types/common.types';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from 'components/ui/DatePicker/DatePicker';

interface IProps {
  fieldProp: IFormField;
}

export const ControllerDatePicker = ({ fieldProp, ...rest }: IProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldProp.name}
      control={control}
      render={({ field: { ref, ...other } }) => (
        <DatePicker
          {...other}
          innerRef={ref}
          disabled={fieldProp.disabled}
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
