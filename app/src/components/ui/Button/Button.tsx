import { Button as UiButton, ButtonProps } from '@mui/material';

export const Button = ({ children, ...rest }: ButtonProps) => <UiButton {...rest}>{children}</UiButton>;
