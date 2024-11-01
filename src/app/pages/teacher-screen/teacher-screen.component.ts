import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISidebarIcons } from 'src/app/interface';

@Component({
  selector: 'app-teacher-screen',
  templateUrl: './teacher-screen.component.html',
  styleUrls: ['./teacher-screen.component.scss']
})
export class TeacherScreenComponent {
  icons: ISidebarIcons[] = [
    { name: "Início", image: 'assets/icons-sidebar/inicio.svg' },
    { name: "Turmas", image: 'assets/icons-sidebar/turmas.svg' },
  ];

  constructor(private router: Router) { }

}
