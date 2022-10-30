import UserStore from '../../store/UserStore';

export const logout = () => {
  UserStore.deleteUser();
};
