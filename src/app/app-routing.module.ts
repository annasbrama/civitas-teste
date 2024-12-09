import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminScreenComponent } from './pages/admin-screen/admin-screen.component';
import { ClassRegistrationComponent } from './pages/class-registration/class-registration.component';
import { AdminLoginComponent } from './pages/auth/admin-login/admin-login.component';
import { TeacherRegistrationComponent } from './pages/teacher-registration/teacher-registration.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { TeacherScreenComponent } from './pages/teacher-screen/teacher-screen.component';

const routes: Routes = [
  { path: 'admin-screen', component: AdminScreenComponent },
  { path: 'teacher-screen', component: TeacherScreenComponent },
  { path: 'class-registration', component: ClassRegistrationComponent },
  { path: 'admin-login', component: AdminLoginComponent }, 
  { path: 'teacher-registration', component: TeacherRegistrationComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'admin-login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
