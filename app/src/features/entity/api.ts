import { CreateEntityDto, DefaultApiFactory } from '../../api';
import { API_PREFIX } from '../config';

export const createEntity = ({ createEntityDto }: { createEntityDto: CreateEntityDto }) =>
  DefaultApiFactory(undefined, API_PREFIX)
    .entityControllerCreateEntity(createEntityDto)
    .then(res => res.data);

export const getEntities = () =>
  DefaultApiFactory(undefined, API_PREFIX)
    .entityControllerGetEntities()
    .then(res => res.data);
