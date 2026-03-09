import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserAsInterface } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: false, // Module based component
})
export class UserComponent {
  @Input({ required: true }) user!: UserAsInterface;
  @Input({ required: true }) selected!: boolean;

  @Output() selectedUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectingUser() {
    this.selectedUser.emit(this.user.id);
  }
}
