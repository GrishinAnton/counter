import { Grid as UiGrid, GridProps } from '@mui/material';

export const Grid: React.FC<GridProps> = ({ children, ...rest }) => <UiGrid {...rest}>{children}</UiGrid>;
