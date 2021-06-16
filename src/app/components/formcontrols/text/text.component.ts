import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextComponent),
    multi: true
  }],
})
export class TextComponent implements ControlValueAccessor {
  @Input() initialValue = false;
  @Input() id: number;
  @Input() tittle: string;
  @Input() required: boolean;
  @Input() readonly: boolean;
  @Input() text: string;

  onChange(_: any): void {}

  changeText(): void {
    this.onChange(this.text);
  }

  writeValue(value: any): void {
    this.text = value;
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}
}
