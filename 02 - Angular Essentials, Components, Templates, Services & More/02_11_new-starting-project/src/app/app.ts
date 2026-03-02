import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
