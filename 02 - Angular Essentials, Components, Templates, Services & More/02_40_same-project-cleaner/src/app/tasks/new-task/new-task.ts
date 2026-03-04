import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

/**
 * NgModule needs to be registered in that component by importing FormsModule@angular/forms
 */
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  // "void" here means there will be no data emitted
  @Output() closing = new EventEmitter<void>();

  /**
   * "Normal" version, using Two-Way-Binding:
   * [(ngModel)] = "enteredTitle"
   */
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  /**
   * Signals version, the HTML stays the same, [(ngModel)] will still be functioning as normal,
   * Difference being, enteredTitle will be registered in HTML as a WritableSignal<string> instead of a string:
   * [(ngModel)] = "enteredTitle_signals"
   */
  enteredTitle_signals = signal('');

  // Dependency Injection
  private tasksService = inject(TasksService);

  onCancel() {
    this.closing.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId,
    );
    this.closing.emit();
  }
}
