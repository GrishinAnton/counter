import React, { useMemo } from 'react';
import { EActionType, IActionType, IFormField, IFormFieldForRadio } from 'common/types/common.types';
import { ControllerTextField } from 'components/layout/ControllerComponent/ControllerInput/ControllerTextField';
import { ControllerDatePicker } from 'components/layout/ControllerComponent/ControllerDatePicker/ControllerDatePicker';
import { ControllerCheckbox } from 'components/layout/ControllerComponent/ControllerCheckbox/ControllerCheckbox';
import { ControllerRadio } from 'components/layout/ControllerComponent/ControllerRadio/ControllerRadio';
import { EntityAction } from '../../../../api';

interface IProps {
  type: keyof IActionType;
}

export const EntityForm: React.FC<IProps> = ({ type }) => {
  const createEntity: IFormField[] = useMemo(
    () => [
      {
        label: 'Название',
        name: 'name',
        type: 'text',
        required: true,
        placeholder: 'Введите название',
        fieldType: 'input',
        disabled: type === EActionType.VIEW,
      },
      {
        label: 'Дата старта',
        name: 'startDate',
        type: 'date',
        required: false,
        placeholder: 'Введите дату старта',
        fieldType: 'date',
        disabled: type === EActionType.VIEW,
      },
      {
        label: 'Дата окончания',
        name: 'finishDate',
        type: 'date',
        required: false,
        placeholder: 'Введите дату окончания',
        fieldType: 'date',
        disabled: type === EActionType.VIEW,
      },
      {
        label: 'Учитывать время',
        name: 'time',
        type: 'checkbox',
        required: false,
        fieldType: 'checkbox',
        disabled: type === EActionType.VIEW,
      },
      {
        label: 'Начальное значение',
        name: 'value',
        type: 'number',
        required: true,
        placeholder: 'Введите стартовое значение',
        fieldType: 'input',
        disabled: type === EActionType.VIEW,
      },
    ],
    [],
  );

  const counts: IFormFieldForRadio[] = useMemo(
    () => [
      {
        label: 'Увеличение',
        value: EntityAction.Increment,
        type: 'radio',
        required: false,
        fieldType: 'radio',
        disabled: type === EActionType.VIEW,
      },
      {
        label: 'Уменьшение',
        value: EntityAction.Decrement,
        type: 'radio',
        required: false,
        fieldType: 'radio',
        disabled: type === EActionType.VIEW,
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
