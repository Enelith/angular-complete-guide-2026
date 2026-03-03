import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { TasksComponent } from './tasks/tasks';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TasksComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  users = DUMMY_USERS;

  targetUserId: string = 'u1';

  get targetedUser() {
    return this.users.find((user) => (user.id === this.targetUserId))!;
  }

  onAppHandleSelectedUser(id: string) {
    this.targetUserId = id;
  }
}
