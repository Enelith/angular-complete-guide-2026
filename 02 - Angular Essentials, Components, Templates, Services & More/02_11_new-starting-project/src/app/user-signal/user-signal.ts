import { Component, computed, signal } from '@angular/core';

// Importing dummy users
import { DUMMY_USERS } from '../dummy-users';

// Having a random number generated, based on the Dummy Users collection
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

/**
 * Note:
 * The State is updated using Signals to notify Angular about value changes & required UI updates.
 * It requires usage of special "signal" instructions & code.
 *
 * The following Signal methods (signal(...) & computed(...)) will automatically create subscriptions behind the scenes.
 *
 * Supported since Angular 16
 */
@Component({
  selector: 'app-user-signal',
  imports: [],
  templateUrl: './user-signal.html',
  styleUrl: './user-signal.scss',
})
export class UserSignalComponent {
  /*
  Signal:
  A signal is an object that stores a value (any type of value, including nested objects).

  Angular manages subscriptions to the signal to get notified about value changes.
  When a change occurs, Angular is the able to update the part of the UI that needs updating.

  => When you change that value, Angular will be notified about that change,
  Angular then is able to identify all the places (for example in your templates) where that value is being used,
  and then able to update these places.

  In short, the idea behind Signals is that:
   - you are dealing with containers, that contain values,
   - those containers notify Angular whenever those values change, so that Angular can then update the parts of the UI where those values are used.

  Can be a very efficient updating mechanism.
   */
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  /*
  Without Signals, we could create a computed value with help of such a getter:
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  When using Signals, this is not how you would do it.
  Instead, you would set up such a computed value by simply adding another regular property, and you would then use the `computed` function from @angular/core.

  `computed` is a function that's meant to be used with Signals, bcs `computed` then takes a function as an argument.
  This function, which you pass to `computed` (in our case, we pass a `() =>`, but could also be a regular function as well),
  should return the computed value, which may use a Signal.
   */
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    /*
    You can change the value of a Signal by calling the `set` method on that Signal object,
    and by then passing the new value to that `set` method.
     */
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
