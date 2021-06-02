import { CustomAny } from './generic';

export interface IFieldBase {
  id: number;
  title: string;
  required: boolean;
  value: CustomAny;
  selectValue?: CustomAny;
  readonly?: boolean;
  type: FieldType;
}

export enum FieldType {
  CHECKBOX = 'checkbox',
  TEXT = 'text',
  RADIO = 'radio',
  SELECT = 'select',
  RADIO_GROUP = 'radio',
  CHECKBOX_GROUP = 'checkbox',
  DATEPICKER = 'datepicker'
}
