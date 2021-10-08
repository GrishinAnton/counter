import UserStore from '../../store/UserStore';
import { history } from './history';
import { ERoutes } from '../../router/config';

export const logout = () => {
  UserStore.deleteUser();
  history.push(ERoutes.LOGIN);
};
