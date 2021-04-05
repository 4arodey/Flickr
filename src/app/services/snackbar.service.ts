import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public duration = 4000;

  constructor( private snackBar: MatSnackBar) {}

  public show(message): void {
      this.snackBar.open(message, 'Close', {
        duration: this.duration,
        panelClass: ['snackbar-item'],
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
  }
}
