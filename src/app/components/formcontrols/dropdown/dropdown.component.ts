import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  public readonly CONTROL_NAME: string = 'dropdown';
  public readonly ERROR_MESSAGE: string = 'Please choose your state';

  @Input('group') public dynamicForm: FormGroup;
}
