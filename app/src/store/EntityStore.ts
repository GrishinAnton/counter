import { makeAutoObservable } from 'mobx';

class EntityStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default new EntityStore();
