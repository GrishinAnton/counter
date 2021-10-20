import { Box } from 'components/ui/Box/Box';
import { ButtonBase } from 'components/ui/ButtonBase/ButtonBase';
import React from 'react';
import cx from 'classnames';
import { buttonBlockUseStyles } from '../styles';

interface IProps {
  onClick: () => void;
  count: number;
}

export const ButtonBlock: React.FC<IProps> = ({ onClick, count }) => {
  const classesCardButton = buttonBlockUseStyles();

  return (
    <Box className={classesCardButton.container}>
      <ButtonBase className={cx(classesCardButton.container, classesCardButton.button)} onClick={() => onClick()}>
        {count}
      </ButtonBase>
    </Box>
  );
};
