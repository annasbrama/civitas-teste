import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showErrorMessage(message: string, subMessage: string) {
    return this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message, subMessage },
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar']
    });
  }
}