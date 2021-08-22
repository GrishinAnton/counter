import React, { useMemo } from 'react';
import { IFormField, IFormFieldForRadio } from 'common/types/common.types';
import { ControllerTextField } from 'components/layout/ControllerComponent/ControllerInput/ControllerTextField';
import { ControllerDatePicker } from 'components/layout/ControllerComponent/ControllerDatePicker/ControllerDatePicker';
import { ControllerCheckbox } from 'components/layout/ControllerComponent/ControllerCheckbox/ControllerCheckbox';
import { ControllerRadio } from 'components/layout/ControllerComponent/ControllerRadio/ControllerRadio';
import { EEntityAction } from '../../../../common/types/entity.types';

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
        name: 'endDate',
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
        name: 'startValue',
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
        value: EEntityAction.INCREMENT,
        type: 'radio',
        required: false,
        fieldType: 'radio',
        disabled: false,
      },
      {
        label: 'Уменьшение',
        value: EEntityAction.DECREMENT,
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
