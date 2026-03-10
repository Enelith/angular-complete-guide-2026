import { Component, Input } from '@angular/core';

import { InvestmentResults } from '../investment-results.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss',
})
export class InvestmentResultsComponent {
  // results = input<InvestmentResults[]>(); // <= Signals version
  @Input() results?: InvestmentResults[];
}
