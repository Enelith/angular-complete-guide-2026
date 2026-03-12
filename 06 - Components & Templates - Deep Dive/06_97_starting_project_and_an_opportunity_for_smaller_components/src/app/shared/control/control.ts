import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    'click': 'onClick()'
  },
})
export class Control {
  // @HostBinding() className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  label = input.required<string>();

  onClick() {
    console.log('Clicked!');
  }
}
