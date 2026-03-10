import { Component } from '@angular/core';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header],
})
export class AppComponent {}
