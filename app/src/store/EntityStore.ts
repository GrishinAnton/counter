import { makeAutoObservable } from 'mobx';
import { GetEntityDto } from '../api';

class EntityStore {
  entities: GetEntityDto[] = [];

  entity: GetEntityDto | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setEntities(entities: GetEntityDto[]) {
    this.entities = entities;
  }

  setEntity(entity: GetEntityDto) {
    this.entity = entity;
  }

  addEntity(entity: GetEntityDto) {
    this.entities.push(entity);
  }

  incEntity(id: number) {
    this.entities = this.entities.map(e => (e.id === id ? { ...e, value: e.value + 1 } : e));
  }

  decEntity(id: number) {
    this.entities = this.entities.map(e => (e.id === id ? { ...e, value: e.value - 1 } : e));
  }

  getEntities() {
    return this.entities;
  }
}

export default new EntityStore();
