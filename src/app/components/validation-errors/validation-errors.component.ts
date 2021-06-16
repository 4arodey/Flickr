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

  get touchInput(): boolean {
    return (this.formGroup.get(this.controlName).touched ||
      this.formGroup.get(this.controlName).dirty) &&
      !!this.formGroup.get(this.controlName).errors;
  }
}
