import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'rating',
  inputs: ['rate'],
  outputs: ['updateRate: rateChange'],
  template: `
    
  `,
})

export class RatingComponent {
  private range:Array<number> = [1,2,3,4,5];
  private rate:number;
  private updateRate = new EventEmitter();
  
  update(value) {
    this.rate = value;
    this.updateRate.next(value);
  }
}