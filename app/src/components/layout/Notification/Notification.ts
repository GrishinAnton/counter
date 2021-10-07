import { toast, ToastContent, TypeOptions } from 'react-toastify';
import { AxiosError } from 'axios';

interface IProps {
  message: ToastContent;
  type?: TypeOptions;
}

export const Notification = ({ message, type = 'success' }: IProps) => {
  toast(message, { type, position: toast.POSITION.BOTTOM_CENTER });
};

export const ResponseNotification = (e: AxiosError) => {
  if (e.response && e.response.data) {
    // @ts-ignore
    return Notification({ message: e.response.data?.message || 'Ошибка', type: 'error' });
  }
};
