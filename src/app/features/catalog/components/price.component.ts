import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-price',
  template: `
    <span [style.color]="value > 500 ? 'red' : null">
      {{value | number: '1.2-2'}}
    </span>
  `,
  styles: []
})
export class PriceComponent {
  @Input() value: number;
}
