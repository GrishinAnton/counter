import { CreateEntityDtoActionEnum } from '../../api';

export interface IEntityFields {
  name: string;
  startDate: Date;
  finishDate: Date | null;
  time: boolean;
  value: string;
  action: CreateEntityDtoActionEnum;
}
