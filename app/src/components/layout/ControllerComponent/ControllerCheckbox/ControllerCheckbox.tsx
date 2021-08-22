import React from 'react';
import { CheckboxProps } from '@material-ui/core';
import { IFormField } from 'common/types/common.types';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from 'components/ui/Checkbox/Checkbox';

interface IProps {
  fieldProp: IFormField;
}

export const ControllerCheckbox: React.FC<IProps & CheckboxProps> = ({ fieldProp, ...rest }) => {
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
