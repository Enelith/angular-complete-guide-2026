import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() selectedUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectingUser() {
    this.selectedUser.emit(this.id);
  }
}
