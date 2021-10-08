import React, { useMemo } from 'react';
import { IFormField, IFormFieldForRadio } from 'common/types/common.types';
import { ControllerTextField } from 'components/layout/ControllerComponent/ControllerInput/ControllerTextField';
import { ControllerDatePicker } from 'components/layout/ControllerComponent/ControllerDatePicker/ControllerDatePicker';
import { ControllerCheckbox } from 'components/layout/ControllerComponent/ControllerCheckbox/ControllerCheckbox';
import { ControllerRadio } from 'components/layout/ControllerComponent/ControllerRadio/ControllerRadio';
import { CreateEntityDtoActionEnum } from '../../../../api';

export const Form = () => {
  const createEntity: IFormField[] = useMemo(
    () => [
      {
        label: 'Название',
        name: 'name',
        type: 'text',
        required: true,
        placeholder: 'Введите название',
        fieldType: 'input',
        disabled: false,
      },
      {
        label: 'Дата старта',
        name: 'startDate',
        type: 'date',
        required: false,
        placeholder: 'Введите дату старта',
        fieldType: 'date',
        disabled: false,
      },
      {
        label: 'Дата окончания',
        name: 'finishDate',
        type: 'date',
        required: false,
        placeholder: 'Введите дату окончания',
        fieldType: 'date',
        disabled: false,
      },
      {
        label: 'Учитывать время',
        name: 'time',
        type: 'checkbox',
        required: false,
        fieldType: 'checkbox',
        disabled: false,
      },
      {
        label: 'Начальное значение',
        name: 'value',
        type: 'number',
        required: true,
        placeholder: 'Введите стартовое значение',
        fieldType: 'input',
        disabled: false,
      },
    ],
    [],
  );

  const counts: IFormFieldForRadio[] = useMemo(
    () => [
      {
        label: 'Увеличение',
        value: CreateEntityDtoActionEnum.Increment,
        type: 'radio',
        required: false,
        fieldType: 'radio',
        disabled: false,
      },
      {
        label: 'Уменьшение',
        value: CreateEntityDtoActionEnum.Decrement,
        type: 'radio',
        required: false,
        fieldType: 'radio',
        disabled: false,
      },
    ],
    [],
  );

  return (
    <>
      {createEntity.map(field => {
        if (field.fieldType === 'input') {
          return <ControllerTextField key={field.name} fieldProp={field} />;
        }
        if (field.fieldType === 'date') {
          return <ControllerDatePicker key={field.name} fieldProp={field} />;
        }
        if (field.fieldType === 'checkbox') {
          return <ControllerCheckbox key={field.name} fieldProp={field} />;
        }

        return null;
      })}
      <ControllerRadio fieldProps={counts} name='action' />
    </>
  );
};
