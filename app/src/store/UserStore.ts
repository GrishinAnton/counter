import { makeAutoObservable } from 'mobx';

class UserStore {
  user: {} | null | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  login = async () => {
    try {
      const user ={}
      this.user = user;
    } catch (e) {
      const errorMessage = e.message;
      throw Error(errorMessage);
    }

  };
}

export default new UserStore();
