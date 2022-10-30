import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

interface IProp {
  onCancelClick: () => void;
  onOkClick: () => void;
}

export const ModalFooter = ({ onCancelClick, onOkClick }: IProp) => (
  <Box sx={{ paddingTop: '20px' }}>
    <Button onClick={onOkClick}>Да</Button>
    <Button onClick={onCancelClick}>Нет</Button>
  </Box>
);
