import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
})
export class ValidationErrorsComponent {
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() errorMessage: string;

  touchInput(formGroup: FormGroup, controlName: string): boolean {
    return (formGroup.get(controlName).touched ||
      formGroup.get(controlName).dirty) &&
      !!formGroup.get(controlName).errors;
  }
}
