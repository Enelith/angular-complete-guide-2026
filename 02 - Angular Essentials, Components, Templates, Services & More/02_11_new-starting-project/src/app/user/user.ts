import { Component, Input } from '@angular/core';

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
  @Input({ required: true }) avatar!: string;

  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
