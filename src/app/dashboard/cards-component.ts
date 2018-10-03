import { Type } from '@angular/core';

export class CardsComponentItem {
  constructor(public component: Type<any>, public data: any) {}
}

export interface CardsComponent {
  data: any;
}
