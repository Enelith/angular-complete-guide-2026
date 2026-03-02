import { Component } from '@angular/core';

// Importing dummy users
import { DUMMY_USERS } from '../dummy-users';

// Having a random number generated, based on the Dummy Users collection
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  // Will display the random user, but how to use it in the template now?
  selectedUser = DUMMY_USERS[randomIndex]
}
