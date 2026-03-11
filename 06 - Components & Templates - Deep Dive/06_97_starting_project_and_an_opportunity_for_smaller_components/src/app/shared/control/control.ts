import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
})
export class Control {
  label = input.required<string>();
}
