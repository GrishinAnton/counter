import { makeAutoObservable } from 'mobx';
import { AuthUserResponseDto } from '../api';
import { getDataFromLocalStorage } from '../common/utils/localStorage';

class UserStore {
  user: AuthUserResponseDto | null = getDataFromLocalStorage('user');

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: AuthUserResponseDto) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  deleteUser() {
    this.user = null;
  }
}

export default new UserStore();
