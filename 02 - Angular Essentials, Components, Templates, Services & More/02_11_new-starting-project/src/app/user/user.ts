import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  // @Input() marks this property as settable from outside this component.
  // Adding "!" after the `avatar` variable tells TypeScript that we know that this variable will be set to some value,
  // even though TypeScript can't see it in this code
  @Input() avatar!: string;

  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
