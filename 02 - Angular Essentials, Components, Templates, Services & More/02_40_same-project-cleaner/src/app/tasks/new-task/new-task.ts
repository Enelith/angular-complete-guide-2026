import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTaskComponent {
  // "void" here means there will be no data emitted
  @Output() cancelling = new EventEmitter<void>();

  onCancel() {
    this.cancelling.emit();
  }
}
