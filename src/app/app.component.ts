import { GlobalLoadService } from './global-load.service';
import { Product } from './models/product';
import { OrderType } from './models/orderStatus';
import { Customer } from './models/customer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'eTra';
  product: Product;
  constructor(gls: GlobalLoadService ) {this.product = new Product('Dummy', 0, '', '', '', 0, 0, 0, '', false); 
  gls.getProductCategories();

}
 // i: number;
 // i = OrderType.CustomerOrder;
}
