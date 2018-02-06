import { FireDateService } from './../fire-date.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Product[];
selectedProduct: Product;
  constructor(private fd: FireDateService) { }

  ngOnInit() {
    this.fd.getProducts().subscribe( products => { this.products = products; });
   // console.log('jj'+ this.products.length);
  }
  selectProduct(product: Product) {
    this.selectedProduct = product;
    if (!this.selectedProduct) {
      this.selectedProduct = new Product('' , 0, '' , '', '', 0, 0, 0, '', false);
    }
  }

}
