import { makeAutoObservable } from 'mobx';
import { GetEntityDto } from '../api';

class EntityStore {
  entities: GetEntityDto[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setEntities(entities: GetEntityDto[]) {
    this.entities = entities;
  }

  addEntity(entity: GetEntityDto) {
    this.entities.push(entity);
  }

  getEntities() {
    return this.entities;
  }
}

export default new EntityStore();
