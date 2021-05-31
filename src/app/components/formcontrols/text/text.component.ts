import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  public readonly CONTROL_NAME: string = 'textControl';
  public readonly ERROR_MESSAGE: string = 'Please enter min 3 symbols.';

  @Input('group') public dynamicForm: FormGroup;
}
