import { Address } from './../models/address';
import { FireDateService } from './../fire-date.service';
import { NgForm } from '@angular/forms';
import { Customer } from './../models/customer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
@Input() customer: Customer;
address: Address = new Address('', '', '', '', '', '', '');
  constructor(private fd: FireDateService) { }

  ngOnInit() {
    this.customer = new Customer('', 0, '', '', false, '', '', '', this.address);
  }
  save(form: NgForm) {
    if (this.customer.id.length === 0 && form.valid && form.dirty) {
      this.fd.addCustomer(this.customer);
      form.reset();
      }else if ( this.customer.id.length !== 0 && form.valid && form.dirty) {
        if ( this.customer.address.id.length === 0 ) {
         this.customer.address = null;
        }
        this.fd.updateCustomer(this.customer);
      }
  }
  deleteCustomer(customer: Customer) {
    if (customer.id.length !== 0) {
      this.fd.deleteCustomer(customer);
      this.address = new Address('', '', '', '', '', '', '');
      this.customer = new Customer ('', 0, '', '', false, '', '', '', this.address );
      }
  }
  newCustomer (firm: NgForm) {}
}
