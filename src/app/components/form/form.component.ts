import { Component, OnInit } from '@angular/core';
import { IFieldBase } from 'src/app/interfaces/card.model';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
