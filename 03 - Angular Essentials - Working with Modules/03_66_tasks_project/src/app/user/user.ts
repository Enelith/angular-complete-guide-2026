import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserAsInterface } from './user.model';
import { CardComponent } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.html',
  styleUrl: './user.scss',
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
