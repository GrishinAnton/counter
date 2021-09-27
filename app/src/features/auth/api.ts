import { CreateUserDto, DefaultApiFactory } from '../../api';
import { API_PREFIX } from '../config';

export const login = ({ createUserDto }: { createUserDto: CreateUserDto }) =>
  DefaultApiFactory(undefined, API_PREFIX)
    .authControllerLogin(createUserDto)
    .then(res => res.data);

export const register = ({ createUserDto }: { createUserDto: CreateUserDto }) =>
  DefaultApiFactory(undefined, API_PREFIX)
    .authControllerRegistration(createUserDto)
    .then(res => res.data);
