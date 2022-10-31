import React from 'react';
import { IFormField } from 'common/types/common.types';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from 'components/ui/DatePicker/DatePicker';

interface IProps {
  fieldProp: IFormField;
}

export const ControllerDatePicker = ({ fieldProp }: IProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={fieldProp.name}
      control={control}
      render={({ field: { ref, ...other } }) => (
        <DatePicker
          {...other}
          label={fieldProp.label}
          disabled={fieldProp.disabled}
          fullWidth
          id={fieldProp.name}
          required={fieldProp.required}
          error={fieldProp.name in errors}
          helperText={errors[fieldProp.name]?.message as string}
        />
      )}
    />
  );
};
