import { Component } from '@angular/core';

import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, UserInput],
})
export class AppComponent {
  onCalculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    //return annualData;
    console.log("Annual Data: ", annualData);
  }
}
