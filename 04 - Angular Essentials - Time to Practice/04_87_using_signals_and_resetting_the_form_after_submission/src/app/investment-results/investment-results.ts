import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import type { InvestmentResults } from '../investment-results.model';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss',
})
export class InvestmentResultsComponent {
  results = input<InvestmentResults[]>();
}
