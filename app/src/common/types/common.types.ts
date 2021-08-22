export interface IOptions {
  label: string;
  value: string;
}

export enum EActionType {
  CREATE = 'create',
  EDIT = 'edit',
  VIEW = 'view',
}

export interface IActionType {
  [EActionType.CREATE]: 'create';
  [EActionType.EDIT]: 'edit';
  [EActionType.VIEW]: 'view';
}

type IFormFieldType = 'input' | 'select' | 'phone' | 'radio' | 'checkbox' | 'password' | 'date';

export interface IFormField {
  label: string;
  name: string;
  type: string;
  required: boolean;
  placeholder?: string;
  fieldType: IFormFieldType;
  disabled: boolean;
  helperText?: string;
}
export interface IFormFieldForRadio {
  label: string;
  value: string;
  type: string;
  required: boolean;
  fieldType: IFormFieldType;
  disabled: boolean;
}
