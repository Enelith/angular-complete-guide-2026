import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USER } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: USER;

  @Output() selectedUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectingUser() {
    this.selectedUser.emit(this.user.id);
  }
}
