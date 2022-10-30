import { TextField as UiTextField, TextFieldProps } from '@mui/material';

export const TextField = ({ ...rest }: TextFieldProps) => <UiTextField variant='outlined' {...rest} />;
