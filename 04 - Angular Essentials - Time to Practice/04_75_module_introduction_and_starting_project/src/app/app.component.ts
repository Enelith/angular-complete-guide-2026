import { Component } from '@angular/core';

import { Header } from './header/header';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, UserInput],
})
export class AppComponent {}
