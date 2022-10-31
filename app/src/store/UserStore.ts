import { makeAutoObservable } from 'mobx';
import { AuthUserResponseDto } from '../api';
import { getDataFromLocalStorage } from '../common/utils/localStorage';
import { makeLoggable } from 'mobx-log';

class UserStore {
  user: AuthUserResponseDto | null = getDataFromLocalStorage('user');

  constructor() {
    makeAutoObservable(this);
    makeLoggable(this);
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
