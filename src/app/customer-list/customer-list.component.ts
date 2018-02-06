import { Customer } from './../models/customer';
import { FireDateService } from './../fire-date.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  selectedCustomer: Customer;
  customers: Customer[];
  constructor(private fd: FireDateService) { }

  ngOnInit() {
    this.fd.getCustomers().subscribe(customers => { this.customers = customers; });
  }
  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

}
