import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class TasksComponent {
  // There has to be a value
  // @Input({ required: true }) name!: string;

  // @TypeScript: It's fine, there may not be a value (but I'm aware of this possibility)
  @Input() name?: string;
  // or
  // @Input() name: string | undefined;
}
