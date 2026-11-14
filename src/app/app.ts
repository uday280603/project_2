import { Component, signal } from '@angular/core';
import { StudentDashboard } from './components/student-dashboard/student-dashboard';

@Component({
  imports: [StudentDashboard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project_2');
}
