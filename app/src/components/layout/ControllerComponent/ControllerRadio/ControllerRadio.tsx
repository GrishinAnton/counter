import { FormControl, RadioGroup, RadioProps } from '@material-ui/core';
import { Radio } from 'components/ui/Radio/Radio';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IFormFieldForRadio } from 'common/types/common.types';
import { RadioGroupProps } from '@material-ui/core/RadioGroup/RadioGroup';

interface IProp {
  name: string;
  fieldProps: IFormFieldForRadio[];
}

export const ControllerRadio: React.FC<IProp & RadioProps & RadioGroupProps> = ({ fieldProps, name, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl component='div'>
          <RadioGroup row={rest.row} {...field}>
            {fieldProps.map(({ fieldType, ...other }, index) => (
              <Radio key={index} {...other} />
            ))}
          </RadioGroup>
          {/* <FormHelperText>{errors[name]?.message}</FormHelperText> */}
        </FormControl>
      )}
    />
  );
};
