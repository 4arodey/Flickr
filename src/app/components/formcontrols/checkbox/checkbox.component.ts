import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() initialValue = false;
  @Input() id: number;
  @Input() tittle: string;
  @Input() required: boolean;
  @Input() readonly: boolean;
  @Input() text: string;

  onChange(_: any): void {}

  changeCheckbox(): void {
    this.initialValue = !this.initialValue;
    this.onChange(this.initialValue);
  }

  writeValue(value: any): void {
    this.initialValue = value;
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}
}
