import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
/*
  "Input" is a decorator
  "input" is a function
 */


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  /**
   * 1) @Input() marks this property as settable from outside this component.
   *
   * 2) Adding "!" after the `avatar` variable tells TypeScript that we know that this variable will be set to some value,
   * even though TypeScript can't see it in this code.
   *
   * 3) Adding a "required: true" configuration to @Input will throw an error if the component is called without all required fields declared.
   */
  @Input({ required: true }) id!: string;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;

  //@Output() selectedUser = new EventEmitter();
  // Modern way (doesn't create a Signals ~ exactly same than @Output)
  selectedUser = output<string>();

  // Instead of @Input, we can also use the Signals system, by using the "input" function.
  //
  // This will internally tell Angular that the 'avatar' property should be an input to this component,
  // so that it should be settable as an attribute when that component is used.
  //
  // A default value can also be assigned, which will be assumed if no input value has been received yet (can be an empty string).
  avatar_undefined = input(); // Initial value as undefined
  avatar_empty_string = input(''); // Initial value as empty string
  avatar_generic = input<string>(); // No initial value, but we set the type of value that will eventually be received by that input
  avatar_required = input.required<string>(); // The equivalent to @Input({ required: true }) ~ note that you CAN'T pass an initial value, as you're basically telling Angular that this input WILL BE set.

  /**
   * Setting up Signals inputs:
   * From outside the component, you still set those inputs with the normal syntax (Data Binding, Property Binding to set them to a dynamic value)
   * Their value don't have to be a Signal!
   *
   * In our scenario, we're putting a non-Signal value as a value to a Signal input (example: [avatar]="users[0].avatar").
   *
   * Note that those InputSignal are read-only Signals (their value only changes if the input value OUTSIDE of this UserComponent changes.
   * Their value can't be changed from INSIDE the UserComponent.
   */
  avatar = input.required<string>();
  name = input.required<string>();

  // We should now use the "computed" function in order to calculte the imagePath, as "avatar" is an InputSignal.
  /*
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  */
  // Since we're now using "computed", Angular will only recompute this imagePath value whenever the "avatar" value changed.
  // It's therefore more efficient than what we had before, where the getter function would be called whenever anything happens to this component.
  imagePath = computed(() => 'assets/users/' + this.avatar());
  // imagePath now becomes a Signal, a Computed Signal.

  onSelectingUser() {
    this.selectedUser.emit(this.id);
  }
}
