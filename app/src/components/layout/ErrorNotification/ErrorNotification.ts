import _ from 'lodash';
import { Notification } from '../Notification/Notification';

export const ErrorNotification = (error: any) => {
  if (error.message) {
    Notification({ message: error.message, type: 'error' });
    return;
  }

  if (_.isArray(error) && error.length) {
    let message: string = '';
    error.forEach((validationError: any[]) => {
      message += Object.values(validationError);
    });

    Notification({ message, type: 'error' });
    return;
  }

  Notification({ message: 'Ошибка', type: 'error' });
};
