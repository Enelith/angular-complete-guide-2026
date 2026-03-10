import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { UserInputComponent } from './user-input/user-input';
import { InvestmentResultsComponent } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {}
