import { Item } from './../models/item';
import { GlobalLoadService } from './../global-load.service';
import { FireDateService } from './../fire-date.service';
import { NgForm } from '@angular/forms';
import { Product } from './../models/product';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {
  private _product: Product; // = new Product('', 0, '', '', '', 0, 0, 0, '', false);
  private newPreductIndicator = false;
  productCat: Item[];
  @Input() product: Product;
  constructor(private fd: FireDateService, private gs: GlobalLoadService) { }
  productForm: NgForm;
  ngOnChanges() {
  }
  ngOnInit() {
  this.productCat = this.gs.getProductCategories();
  }
  save(form: NgForm) {
    if (form.valid && form.dirty ) {
      if ( this.product.id.length <= 0 && this.newPreductIndicator) {
        this.fd.addProduct(this.product);
        form.reset();
        this.newPreductIndicator = false;
      } else {
        this.fd.updateProduct(this.product);
      }
     }
  }
  deleteProduct(product: Product) {}
  newProduct(form: NgForm) {
    this.product = new Product('', 0, '', '', '', 0, 0, 0, '', false);
    form.reset();
    this.newPreductIndicator = true;
  }

}
