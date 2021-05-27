import { Component, OnInit } from '@angular/core';
import { IFieldBase } from 'src/app/interfaces/card.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      textControl: ['', [Validators.required, Validators.minLength(3)]],
      select: ['', Validators.required],
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

  touchInput(controlName: string): boolean {
    return (this.customerForm.get(controlName).touched ||
      this.customerForm.get(controlName).dirty) &&
      !this.customerForm.get(controlName).valid;
  }

  public save(): void {
    // remove it after implementation of functionality
    console.log(this.customerForm);
    console.log('Saved:' + JSON.stringify(this.customerForm.value));
  }
}
