import { ErrorNotification } from 'components/layout/ErrorNotification/ErrorNotification';
import { getEntitiesApi } from 'features/entity/api';
import { EState } from 'features/types';
import { makeAutoObservable, runInAction } from 'mobx';
import { GetEntityDto } from '../api';
import { makeLoggable } from 'mobx-log';

class EntityStore {
  entities: GetEntityDto[] = [];

  entity: GetEntityDto | null = null;

  state: EState = EState.IDLE;

  constructor() {
    makeAutoObservable(this);
    makeLoggable(this);
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

  async fetchEntities() {
    this.state = EState.PENDING;
    try {
      const entitiesData = await getEntitiesApi();

      runInAction(() => {
        if (entitiesData && entitiesData.length) {
          this.setEntities(entitiesData);
        }

        this.state = EState.SUCCESS;
      });
    } catch (e) {
      runInAction(() => {
        this.state = EState.ERROR;
      });
      ErrorNotification(e);
    }
  }
}

export default new EntityStore();
