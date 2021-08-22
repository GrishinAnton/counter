import { toast, TypeOptions } from 'react-toastify';

interface IProps {
  message: string;
  type?: TypeOptions;
}

export const notification = ({ message, type = 'success' }: IProps) => {
  toast(message, { type, position: toast.POSITION.BOTTOM_CENTER });
};
