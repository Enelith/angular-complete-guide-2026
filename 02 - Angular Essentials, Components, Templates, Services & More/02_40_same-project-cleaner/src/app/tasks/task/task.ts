import { Component, Input } from '@angular/core';
import { TaskAsInterface } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskAsInterface;
}
