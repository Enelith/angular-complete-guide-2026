import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  users = DUMMY_USERS;
}
