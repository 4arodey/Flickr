import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonGroupComponent),
    multi: true
  }],
})
export class RadioButtonGroupComponent implements ControlValueAccessor {
  @Input() initialValue: boolean;
  @Input() text1: string;
  @Input() text2: string;
  @Input() id: number;
  @Input() tittle: string;
  @Input() required: boolean;
  @Input() readonly: boolean;

  onChange(_: any): void {}

  changeRadio(): void {
    this.initialValue = !this.initialValue;
    this.onChange(this.initialValue);
  }

  writeValue(): void {
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}
}
