import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false,
})
export class AppComponent {
  users = DUMMY_USERS;

  targetUserId?: string;

  get targetedUser() {
    return this.users.find((user) => user.id === this.targetUserId);
  }

  onAppHandleSelectedUser(id: string) {
    this.targetUserId = id;
  }
}
