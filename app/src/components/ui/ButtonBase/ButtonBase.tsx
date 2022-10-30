import { ButtonBase as UiButtonBase, ButtonBaseProps } from '@mui/material';

export const ButtonBase = ({ children, ...rest }: ButtonBaseProps) => <UiButtonBase {...rest}>{children}</UiButtonBase>;
