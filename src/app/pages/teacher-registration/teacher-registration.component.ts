import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/components/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.scss']
})
export class TeacherRegistrationComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      // turma: ['', Validators.required],
      escola: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.maxLength(11)]]
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
    this.snackBar.open('Professor(a) cadastrado com sucesso!', '', {
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
      'Professor já existe no cadastro',
      'Cadastre um novo professor ou edite os professores cadastrados.'
    );
  }
}
