import { Injectable } from '@angular/core';
import { FieldType, ControlField, IFieldBase } from 'src/app/interfaces/card.model';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: IFieldBase[] = [
    { id: 1, title: '1', required: true, value: true, readonly: false, text: 'checkBox text', type: FieldType.CHECKBOX },
    { id: 2, title: '2', required: true, value: true, readonly: false, text: 'radioButton text', type: FieldType.RADIO },
    { id: 3, title: '3', required: true, value: 'default text', readonly: false, type: FieldType.TEXT },
    { id: 4, title: '4', required: true, value: ['Select a State...', 'Arkansas', 'California'], type: FieldType.SELECT },
    { id: 5, title: '5', required: true, value: true, readonly: false, text: ['radio 1', 'radio 2'], type: FieldType.RADIO_GROUP },
    { id: 6, title: '6', required: true, value: true, readonly: false, text: ['checkbox 1', 'checkbox 2'], type: FieldType.CHECKBOX_GROUP },
    { id: 7, title: '7', required: true, value: true, readonly: false, type: FieldType.DATEPICKER },
    { id: 8, title: '4', required: true, value: ['Select a State...', 'Arkansas', 'California'], type: FieldType.SELECT },
    { id: 9, title: '6', required: true, value: true, readonly: false, text: ['checkbox 1', 'checkbox 2'], type: FieldType.CHECKBOX_GROUP },
    { id: 11, title: '7', required: true, value: true, readonly: false, type: FieldType.DATEPICKER },
  ];

  controlDefaultValueAndValidators: ControlField = {
    [FieldType.CHECKBOX]: {
      value: false,
      validator: Validators.requiredTrue,
    },
    [FieldType.CHECKBOX_GROUP]: {
      value: false,
      validator: Validators.requiredTrue,
    },
    [FieldType.TEXT]: {
      value: 'default text',
      validator: [Validators.minLength(1), Validators.maxLength(5)],
    },
    [FieldType.RADIO]: {
      value: '',
      validator: Validators.required,
    },
    [FieldType.RADIO_GROUP]: {
      value: '',
      validator: Validators.required,
    },
    [FieldType.SELECT]: {
      value: '',
      validator: Validators.required,
    },
    [FieldType.DATEPICKER]: {
      value: '',
      validator: Validators.required,
    },
  };

  getData(): IFieldBase[] {
    return this.data;
  }

  getControls(): ControlField {
    return this.controlDefaultValueAndValidators;
  }
}
