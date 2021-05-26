import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public isUser: AuthService;
  public isLoading = true;

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    ) {}

  ngOnInit(): void {
    const data = [
      {name: 'Oleg', lastName: 'Karpach', age: '19', weight: '70'},
      {name: 'Olga', lastName: 'Meleshko', age: '23'},
      {name: 'Vasya', lastName: 'Pupkin'},
    ];
    this.isUser = this.authService;
    this.authService.user$.subscribe(
      () => this.isLoading = false
    );
  }

  public close(): void {
    this.dialog.closeAll();
  }

  public signIn(): Promise<void> {
    this.dialog.closeAll();
    return this.authService.googleSignIn();
  }

  public signOut(): Promise<boolean> {
    this.dialog.closeAll();
    return this.authService.signOut();
  }
}
