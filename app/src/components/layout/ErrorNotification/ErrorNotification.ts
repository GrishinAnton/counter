import { Notification } from '../Notification/Notification';

export const ErrorNotification = (error: any) => {
  if (error && error.message) {
    Notification({ message: error.message, type: 'error' });
  }
  if (error && error.length) {
    let message: string = '';
    error.forEach((validationError: any[]) => {
      message += Object.values(validationError);
    });

    Notification({ message, type: 'error' });
  }
};
