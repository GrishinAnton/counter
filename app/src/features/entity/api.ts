import { CreateEntityDto, DefaultApiFactory } from '../../api';
import { API_PREFIX } from '../config';

export const createEntity = ({ createEntityDto }: { createEntityDto: CreateEntityDto }) =>
  DefaultApiFactory(undefined, API_PREFIX)
    .entityControllerCreateEntity(createEntityDto)
    .then(res => res.data);

export const getEntityById = (id: string) =>
  DefaultApiFactory(undefined, API_PREFIX)
    .entityControllerGetEntityById(id)
    .then(res => res.data);

export const getEntities = () =>
  DefaultApiFactory(undefined, API_PREFIX)
    .entityControllerGetEntities()
    .then(res => res.data);

export const deleteEntity = (id: string) =>
  DefaultApiFactory(undefined, API_PREFIX)
    .entityControllerDeleteEntity(id)
    .then(res => res.data);

export const updateEntityIncrement = ({ id }: { id: string }) =>
  DefaultApiFactory(undefined, API_PREFIX)
    .entityControllerUpdateEntityIncrement(id)
    .then(res => res.data);

export const updateEntityDecrement = ({ id }: { id: string }) =>
  DefaultApiFactory(undefined, API_PREFIX)
    .entityControllerUpdateEntityDecrement(id)
    .then(res => res.data);
