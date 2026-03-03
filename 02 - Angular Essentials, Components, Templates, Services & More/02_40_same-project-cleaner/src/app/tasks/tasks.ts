import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class TasksComponent {
  @Input() name?: string;
}
