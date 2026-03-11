import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.scss',
})
export class DashboardItem {
  // DECORATOR VERSION
  /*
  @Input({ required: true }) image!: { src: string; alt: string };
  @Input({ required: true }) title!: string;
  */

  // USING 'INPUT' (SIGNAL) FUNCTION (only available with Angular@17.1+)
  image = input.required<{ src: string; alt: string }>(); // In this case, '{ src: string; alt: string}' is a GENERIC TYPE
  title = input.required<string>();
}
