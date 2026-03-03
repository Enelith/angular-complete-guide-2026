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

  targetUserId: string = '';

  get targetedUser() {
    /**
     * Note that the "!" tells Angular a result will be found through the method ".find(...)".
     * Without it, an error will occur as there is the possibility for the result to be undefined if no results are found.
     *
     * For TypeScript / Angular, it rules out the possibility to have an undefined value as we (as developer) assert there's going to be a value.
     */
    //return this.users.find((user) => (user.id === this.targetUserId))!;

    return this.users.find((user) => user.id === this.targetUserId);
  }

  onAppHandleSelectedUser(id: string) {
    this.targetUserId = id;
  }
}
