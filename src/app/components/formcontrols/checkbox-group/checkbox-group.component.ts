import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent {
  public readonly CONTROL_NAME: string = 'checkboxGroup';
  public readonly ERROR_MESSAGE: string = 'Please activate checkboxes';

  @Input('group') public dynamicForm: FormGroup;
}
