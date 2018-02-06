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
  @Input() product: Product;
  constructor(private fd: FireDateService) { }
  productForm: NgForm;
  ngOnChanges() {
 //   this.product = new Product('', 0, '', '', '', 0, 0, 0, '', false);
  }
  ngOnInit() {
   // if (!this.product) {
  //  }
  }
  save(form: NgForm) {
    if (form.valid && form.dirty ) {
      console.log('AA');
      if ( this.product.id.length <= 0 && this.newPreductIndicator) {
        console.log('Agmedoo');
        // add
        this.fd.addProduct(this.product);
        form.reset();
        this.newPreductIndicator = false;
      } else {
// update

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
