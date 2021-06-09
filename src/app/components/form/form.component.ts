import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IControls, IFieldBase } from 'src/app/interfaces/card.model';
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
  controls: IControls;
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup(): void {
    this.data = this.dataService.getData();
    this.controls = this.dataService.getControls();
    this.customerForm = this.fb.group({});

    this.data.forEach((item, i) => {
      const controlName = this.setFormControlName(item.type, item.id);
      this.addValidators(this.customerForm, controlName, item.type);
    });
  }

  addValidators(formGroup: FormGroup, controlName: string, typeName: string): void {
    for (const code in this.controls) {
      if (code === typeName) {
        console.log(this.controls[code].value);
        formGroup.addControl(controlName, this.fb.control(this.controls[code].value));
        formGroup.controls[controlName].setValidators(this.controls[code].validator);
      }
    }
  }

  setFormControlName(controlType: string, id: number): string {
    return controlType + id;
  }

  save(): void {
    // remove it after implementation of functionality
    console.log(this.customerForm);
    console.log('Saved:' + JSON.stringify(this.customerForm.value));
  }
}
