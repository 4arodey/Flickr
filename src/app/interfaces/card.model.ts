import { CustomAny } from './generic';
import { Validators } from '@angular/forms';

export interface IFieldBase {
  id: number;
  title: string;
  required: boolean;
  value: CustomAny;
  readonly?: boolean;
  type: FieldType;
}

export interface IControls {
  checkbox: IValidatorField;
  checkboxGroup: IValidatorField;
  text: IValidatorField;
  radio: IValidatorField;
  radioGroup: IValidatorField;
  select: IValidatorField;
  checkBox: IValidatorField;
  datepicker: IValidatorField;
}

export interface IValidatorField {
  value: boolean | string;
  validator: Validators;
}

export enum FieldType {
  CHECKBOX = 'checkbox',
  TEXT = 'text',
  RADIO = 'radio',
  SELECT = 'select',
  RADIO_GROUP = 'radioGroup',
  CHECKBOX_GROUP = 'checkboxGroup',
  DATEPICKER = 'datepicker'
}
