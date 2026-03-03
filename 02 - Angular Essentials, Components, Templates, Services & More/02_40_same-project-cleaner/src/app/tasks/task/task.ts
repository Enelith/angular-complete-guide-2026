import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
