import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

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
  // "void" here means there will be no data emitted
  @Output() cancelling = new EventEmitter<void>();
  @Output() adding = new EventEmitter<NewTaskData>();

  /**
   * "Normal" version, using Two-Way-Binding:
   * [(ngModel)] = "enteredTitle_signals"
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

  onCancel() {
    this.cancelling.emit();
  }

  onSubmit() {
    this.adding.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}
