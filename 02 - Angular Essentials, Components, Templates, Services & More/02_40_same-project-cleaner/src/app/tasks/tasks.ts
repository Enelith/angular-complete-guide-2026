import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class TasksComponent {
  @Input() name?: string;
}
