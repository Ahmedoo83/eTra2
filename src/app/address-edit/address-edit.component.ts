import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../models/address';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
@Input() address: Address;
address2: Address = new Address('', '', '', '', '', '', '');
  constructor() { }

  ngOnInit() {
    if (!this.address) {
    this.address = this.address2;
    }
  }

}
