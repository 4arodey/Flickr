import { Injectable } from '@angular/core';
import {FieldType, IControls, IFieldBase} from 'src/app/interfaces/card.model';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: IFieldBase[] = [
    { id: 1, title: '1', required: true, value: true, readonly: false, type: FieldType.CHECKBOX },
    { id: 2, title: '2', required: true, value: true, readonly: false, type: FieldType.RADIO },
    { id: 3, title: '3', required: true, value: true, readonly: false, type: FieldType.TEXT },
    { id: 4, title: '4', required: true, value: ['Select a State...', 'Arkansas', 'California'], type: FieldType.SELECT },
    { id: 5, title: '5', required: true, value: true, readonly: false, type: FieldType.RADIO_GROUP },
    { id: 6, title: '6', required: true, value: true, readonly: false, type: FieldType.CHECKBOX_GROUP },
    { id: 7, title: '7', required: true, value: true, readonly: false, type: FieldType.DATEPICKER },
    { id: 8, title: '1', required: true, value: true, readonly: false, type: FieldType.CHECKBOX },
    { id: 9, title: '2', required: true, value: true, readonly: false, type: FieldType.RADIO },
  ];

  controls: IControls = {
    checkbox: {
      value: false,
      validator: Validators.requiredTrue,
    },
    checkboxGroup: {
      value: false,
      validator: Validators.requiredTrue,
    },
    text: {
      value: 'default text',
      validator: [Validators.minLength(1), Validators.maxLength(5)],
    },
    radio: {
      value: '',
      validator: Validators.required,
    },
    radioGroup: {
      value: '',
      validator: Validators.required,
    },
    select: {
      value: '',
      validator: Validators.required,
    },
    checkBox: {
      value: false,
      validator: Validators.requiredTrue,
    },
    datepicker: {
      value: '',
      validator: Validators.required,
    },
  };

  getData(): IFieldBase[] {
    return this.data;
  }

  getControls(): IControls {
    return this.controls;
  }
}
