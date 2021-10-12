import { EntityAction } from '../../api';

export interface IEntityFields {
  name: string;
  startDate: Date;
  finishDate: Date | null;
  time: boolean;
  value: string;
  action: EntityAction;
}

export interface IViewEntityFields extends IEntityFields {
  id: number;
}
