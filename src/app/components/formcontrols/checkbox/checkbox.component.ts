import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  public readonly CONTROL_NAME: string = 'checkBox';
  public readonly ERROR_MESSAGE: string = 'Please activate checkbox';

  @Input('group') public dynamicForm: FormGroup;
}
