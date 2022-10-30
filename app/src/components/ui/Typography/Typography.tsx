import { Typography as UiTypography, TypographyProps } from '@mui/material';

interface IProps extends TypographyProps {}

export const Typography = ({ children, ...rest }: IProps) => <UiTypography {...rest}>{children}</UiTypography>;
