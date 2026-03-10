import { Component, computed, inject, Signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../investment.service';
import { InvestmentResults } from '../investment-results.model';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // This one
  /*
  get results() {
    return this.investmentService.resultData;
  }
  */

  // Or this one
  // results = this.investmentService.resultData.asReadonly();

  // And this one are valid
  results: Signal<InvestmentResults[] | undefined> = computed(() =>
    this.investmentService.resultData(),
  );
}
