import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true
  }],
})
export class RadioButtonComponent {
  @Input() initialValue = false;
  @Input() id: number;
  @Input() tittle: string;
  @Input() required: boolean;
  @Input() readonly: boolean;
  @Input() text: string;

  onChange(_: any): void {}

  changeRadioButton(): void {
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
