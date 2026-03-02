import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { UserSignalComponent } from './user-signal/user-signal';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent,
    UserSignalComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
