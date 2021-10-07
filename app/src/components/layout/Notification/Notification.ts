import { toast, ToastContent, TypeOptions } from 'react-toastify';

interface IProps {
  message: ToastContent;
  type?: TypeOptions;
}

export const Notification = ({ message, type = 'success' }: IProps) => {
  toast(message, { type, position: toast.POSITION.BOTTOM_CENTER });
};
