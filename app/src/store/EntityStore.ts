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

  incEntity(id: number) {
    this.entities = this.entities.map(e => (e.id === id ? { ...e, startValue: String(Number(e.startValue) + 1) } : e));
  }

  decEntity(id: number) {
    this.entities = this.entities.map(e => (e.id === id ? { ...e, startValue: String(Number(e.startValue) - 1) } : e));
  }

  getEntities() {
    return this.entities;
  }
}

export default new EntityStore();
