import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlField, IFieldBase, FieldType } from 'src/app/interfaces/card.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  data: IFieldBase[];
  controls: ControlField;
  customerForm: FormGroup;
  fieldType = FieldType;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  dataById(index: number, data: IFieldBase): number {
    return data.id;
  }

  save(): void {
    // remove it after implementation of functionality
    console.log(this.customerForm);
    console.log('Saved:' + JSON.stringify(this.customerForm.value));
  }

  private initFormGroup(): void {
    this.data = this.dataService.getData();
    this.controls = this.dataService.getControls();
    this.customerForm = this.fb.group({});

    this.data.forEach((item, i) => {
      this.addValidators(this.customerForm, item.formControlName, item.type);
    });
  }

  private addValidators(formGroup: FormGroup, controlName: string, typeName: string): void {
    for (const code in this.controls) {
      if (code === typeName) {
        formGroup.addControl(controlName, this.fb.control(this.controls[code].value));
        formGroup.controls[controlName].setValidators(this.controls[code].validator);
      }
    }
  }
}
