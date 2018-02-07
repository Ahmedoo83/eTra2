import { GlobalLoadService } from './../global-load.service';
import { FireDateService } from './../fire-date.service';
import { NgForm } from '@angular/forms';
import { Order } from './../models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;
  constructor(private fb: FireDateService, private g: GlobalLoadService) { }

  ngOnInit() {
    this.order = new Order('', this.fb.currentEmployee, new Date(),
    this.g.getStatus(1, 'OrderStatus'), new Date(),
    this.g.getStatus(1, 'OrderStatus'), new Date(),
     this.g.getStatus(1, 'OrderStatus'),
     this.g.getStatus(1, 'OrderStatus'), 1,
      this.fb.getCustomers()[0], null , 0, 0, '');
}
  newOrder(form: NgForm) { }
  deleteOrder(order: Order) { }
  save(form: NgForm) { }

}
