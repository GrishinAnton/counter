import { Box as UiBox, BoxProps } from '@mui/material';

export const Box = ({ children, ...rest }: BoxProps) => <UiBox {...rest}>{children}</UiBox>;
