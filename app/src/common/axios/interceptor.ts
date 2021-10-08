import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getDataFromLocalStorage } from '../utils/localStorage';
import { AuthUserResponseDto } from '../../api';
import { logout } from '../utils/logout';

enum EResponseStatus {
  Unauthorized = 401,
}

/** Interceptors */
export const intercept = () => {
  Axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config && config.headers) {
      if (config.headers.hasOwnProperty('NOINTERCEPT')) {
        return config;
      }
      const user: AuthUserResponseDto = getDataFromLocalStorage('user');

      config.withCredentials = true;

      /** Аутентификация */
      // Отправлять акцесс токен на рефреш не нужно, будет ошибка 403 (HTTP_ERROR_FORBIDDEN)
      if (user && user.token && config) {
        // /** Убрать все русские символы, так как в заголовках их отправлять нельзя */
        // config.headers.Authorization = token.replace(/[а-яА-Я]/g, '');
        config.headers.Authorization = `Bearer ${user.token}`;
      }

      return config;
    }
  });
  Axios.interceptors.response.use(
    response => response,
    // @ts-ignore
    async error => {
      if (error.response?.status === EResponseStatus.Unauthorized) {
        logout();
      }
      const e = error as AxiosError;

      throw e.response?.data || error;
    },
  );
};
