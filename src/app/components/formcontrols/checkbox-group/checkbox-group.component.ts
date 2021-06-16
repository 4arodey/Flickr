import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxGroupComponent),
    multi: true
  }],
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  @Input() initialValue1: boolean;
  @Input() initialValue2: boolean;
  @Input() text1: string;
  @Input() text2: string;
  @Input() id: number;
  @Input() tittle: string;
  @Input() required: boolean;
  @Input() readonly: boolean;

  onChange(_: any): void {}

  changeCheckbox1(): void {
    this.initialValue1 = !this.initialValue1;
    this.onChange(this.initialValue1);
  }

  changeCheckbox2(): void {
    this.initialValue2 = !this.initialValue2;
    this.onChange(this.initialValue2);
  }

  writeValue(): void {
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}
}
