import { Notification } from '../Notification/Notification';

export const ErrorNotification = (error: any) => {
  const responseData = error.response.data;
  if (responseData && responseData.message) {
    Notification({ message: responseData.message, type: 'error' });
  }
  if (responseData && responseData.length) {
    let message: string = '';
    responseData.forEach((validationError: any[]) => {
      message += Object.values(validationError);
    });

    Notification({ message, type: 'error' });
  }
};
