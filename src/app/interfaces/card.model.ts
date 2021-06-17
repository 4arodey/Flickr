import { Validators } from '@angular/forms';
import { CustomAny } from 'src/app/interfaces/generic';

export interface IFieldBase {
  id: number;
  title: string;
  required: boolean;
  value: CustomAny;
  text?: CustomAny;
  readonly?: boolean;
  type: FieldType;
  formControlName?: string;
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

export type ControlField = Record<FieldType, IValidatorField>;
