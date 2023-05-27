import { Component } from '@angular/core';
import { shops } from './shops';

@Component({
  selector: 'fc-shops',
  templateUrl: './shops.widget.html',
  styleUrls: ['./shops.widget.less'],
})
export class ShopsWidget {
  shops = shops;
}
