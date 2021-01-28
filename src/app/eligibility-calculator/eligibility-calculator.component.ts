import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css'],
})
export class EligibilityCalculatorComponent implements OnInit {
  selectedValue: string = '6 Months';
  incomeValue: string = '100000';
  monthlyExpense: string = '10000';

  tenures = ['6 Months', '1 Year', '2 Years'];

  constructor() {}

  ngOnInit(): void {}
}
