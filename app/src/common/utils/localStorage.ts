// @ts-nocheck

import { EActionType } from '../types/common.types';
import { EEntityAction } from '../types/entity.types';
import { EActions } from '../../features/config';

export const setData = (field: string, data: any) => localStorage.setItem(field, JSON.stringify(data));
export const getData = (field: string) => JSON.parse(localStorage.getItem(field) as any);

export const appendData = (field: string, data: any) => {
  const result: any = getData(field) || [];

  localStorage.setItem(field, JSON.stringify([...result, data]));
};

interface IUpdateCounter {
  field: EActions;
  id: string;
  action: EEntityAction;
}

export const updateCounter = ({ field, id, action }: IUpdateCounter) => {
  const result: any = getData(field) || [];

  if (result.length) {
    const findIndex = result.findIndex((item: any) => item.id === id);

    if (findIndex >= 0) {
      switch (action) {
        case EEntityAction.DECREMENT:
          return --result[findIndex].startValue;
        case EEntityAction.INCREMENT:
          return ++result[findIndex].startValue;
      }

      setData(field, result);
    }
  }
};

export const updateData = (field: string, newData: any) => {
  const result: any = getData(field) || [];

  if (result.length) {
    const findIndex = result.findIndex((item: any) => item.id === newData.id);
    result[findIndex] = newData;
    setData(field, result);
  }
};
