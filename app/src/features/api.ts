import { EEntityAction } from '../common/types/entity.types';
import { EActions } from './config';

interface IUpdateEntityCounter {
  id: string;
  action: EEntityAction;
}

export const updateEntityCounter = ({ id, action }: IUpdateEntityCounter) => {
  // updateCounter({ field: EActions.GET_COUNTS, id, action });
};
