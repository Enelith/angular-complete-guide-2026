import { Component } from '@angular/core';

import { Header } from './header/header';
import { UserInputComponent } from './user-input/user-input';
import { InvestmentResultsComponent } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {}
