import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationErrorsComponent {
  @Input() public formGroup: FormControl;
  @Input() public controlName: string;
  @Input() public errorMessage: string;

  touchInput(formGroup: FormGroup, controlName: string): boolean {
    return (formGroup.get(controlName).touched ||
      formGroup.get(controlName).dirty) &&
      !formGroup.get(controlName).valid;
  }
}
