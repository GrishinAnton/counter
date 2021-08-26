import { makeAutoObservable } from 'mobx';

class UserStore {
  user: {} | null | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  signIn = async () => {
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
