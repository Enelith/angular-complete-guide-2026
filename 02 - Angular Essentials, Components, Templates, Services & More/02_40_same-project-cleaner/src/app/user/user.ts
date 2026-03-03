import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserAsInterface } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: UserAsInterface;

  @Output() selectedUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectingUser() {
    this.selectedUser.emit(this.user.id);
  }
}
