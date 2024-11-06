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
    { name: "Início", image: 'assets/icons-sidebar/inicio.svg', route: '/' },
    { name: "Turmas", image: 'assets/icons-sidebar/turmas.svg', route: '#' },
  ];

  constructor(private router: Router) { }

  get greeting(): string {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Bom dia"
    } else if (hour >= 12 && hour < 18) {
      return "Boa tarde"
    } else {
      return "Boa noite"
    }
  }
}
