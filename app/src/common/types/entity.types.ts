import { CreateEntityDtoActionEnum } from '../../api';

export interface IEntityFields {
  name: string;
  startDate: Date;
  finishDate: Date | null;
  time: boolean;
  startValue: string;
  action: CreateEntityDtoActionEnum;
}
