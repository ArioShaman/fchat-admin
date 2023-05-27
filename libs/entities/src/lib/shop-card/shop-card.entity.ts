import { Component, Input } from '@angular/core';

@Component({
  selector: 'fc-shop-card',
  templateUrl: './shop-card.entity.html',
  styleUrls: ['./shop-card.entity.less'],
})
export class ShopCardEntity {
  @Input()
  shop: any;
}
