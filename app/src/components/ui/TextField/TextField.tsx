import React from 'react';
import { TextField as UiTextField, TextFieldProps } from '@material-ui/core';

export const TextField: React.FC<TextFieldProps> = ({ ...rest }) => <UiTextField variant='outlined' {...rest} />;
