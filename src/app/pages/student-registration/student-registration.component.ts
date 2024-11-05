import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/components/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      // turma: ['', Validators.required],
      cpfResponsavel: ['', [Validators.required, Validators.maxLength(11)]],
      cpfOuRg: ['', [Validators.required, Validators.maxLength(11)]]
    });
  }
  //=================================
  //Botão voltar 
  goBack() {
    this.router.navigate(['/admin-screen'])
  }

  onSubmit() {
    if (this.form.valid) {
      this.showSuccessMessage()
    } else {
      this.errorMessage();
    }
  }

  showSuccessMessage() {
    this.snackBar.open('Estudante cadastrado com sucesso!', '', {
      duration: 3000,
      panelClass: ['sucess-snackbar'],
      horizontalPosition: 'right',
    });

    setTimeout(() => {
      this.router.navigate(['/admin-screen'])
    }, 3500);
  }

  errorMessage() {
    this.snackbarService.showErrorMessage(
      'Estudante já existe no cadastro',
      'Verifique as informações digitadas ou digite novas informações.'
    );
  }
}
