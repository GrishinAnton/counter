import { IconButton as IconButtonUi, IconButtonProps } from '@mui/material';

interface IProps extends IconButtonProps {
  onClick?: () => void;
}

export const IconButton = ({ onClick, children, ...rest }: IProps) => (
  <IconButtonUi {...rest} onClick={onClick && onClick} color='inherit'>
    {children}
  </IconButtonUi>
);
