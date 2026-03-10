import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentResults } from '../investment-results.model';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss',
})
export class InvestmentResultsComponent {
  // results = input<InvestmentResults[]>(); // <= Signals version
  @Input() results?: InvestmentResults[];
}
