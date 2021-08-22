export interface IEntityFields {
  name: string;
  startDate: Date | null;
  endDate: Date | null;
  time: boolean;
  startValue: string;
  action: EEntityAction;
}

export enum EEntityAction {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

export interface IEntityFieldsWithId extends IEntityFields {
  id: string;
}
