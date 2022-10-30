import React from 'react';
import { TextFieldProps } from '@mui/material';
import { IFormField } from 'common/types/common.types';
import { TextField } from 'components/ui/TextField/TextField';
import { Controller, useFormContext } from 'react-hook-form';

interface IProps {
  fieldProp: IFormField;
}

export const ControllerTextField: React.FC<IProps & TextFieldProps> = ({ fieldProp, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={fieldProp.name}
      control={control}
      render={({ field: { ref, ...other } }) => (
        <TextField
          {...other}
          inputRef={ref}
          disabled={fieldProp.disabled || rest.disabled}
          fullWidth
          placeholder={fieldProp.placeholder}
          type={fieldProp.type}
          id={fieldProp.name}
          label={fieldProp.label}
          required={fieldProp.required}
          error={fieldProp.name in errors}
          helperText={errors[fieldProp.name]?.message as string}
        />
      )}
    />
  );
};
