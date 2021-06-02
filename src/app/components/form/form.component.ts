import { Component, OnInit } from '@angular/core';
import { FieldType, IFieldBase } from 'src/app/interfaces/card.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  readonly SAVE_BUTTON_VALUE = 'Save';

  data: IFieldBase[] = [
    { id: 1, title: '1', required: true, value: true, readonly: false, type: FieldType.CHECKBOX },
    { id: 2, title: '2', required: true, value: true, readonly: false, type: FieldType.RADIO },
    { id: 3, title: '3', required: true, value: true, readonly: false, type: FieldType.TEXT },
    { id: 4, title: '4', required: true, value: ['', 'AR', 'CA'],
      selectValue: ['Select a State...', 'Arkansas', 'California'], type: FieldType.SELECT },
    { id: 5, title: '5', required: true, value: true, readonly: false, type: FieldType.RADIO_GROUP },
    { id: 6, title: '6', required: true, value: true, readonly: false, type: FieldType.CHECKBOX_GROUP },
    { id: 7, title: '7', required: true, value: true, readonly: false, type: FieldType.DATEPICKER },
  ];

  customerForm: FormGroup;
  touched = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      textControl: ['', [Validators.required, Validators.minLength(3)]],
      dropdown: ['', Validators.required],
      checkBox: [false, Validators.requiredTrue],
      checkboxGroup: this.fb.group(
        {
          checkbox1: [false, Validators.requiredTrue],
          checkbox2: [false, Validators.requiredTrue],
        }
      ),
      gender: ['', Validators.required],
      radioButton: true,
      datepicker: ['', Validators.required],
    });
  }

  public save(): void {
    // remove it after implementation of functionality
    console.log(this.customerForm);
    console.log('Saved:' + JSON.stringify(this.customerForm.value));
  }
}
