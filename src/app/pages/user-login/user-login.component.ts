import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  constructor(public dialog: MatDialog) {
  }

  public openDialog(): void {
    this.dialog.open(LoginComponent, {autoFocus: false});
  }
}
