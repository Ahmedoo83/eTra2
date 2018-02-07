import { Observable } from 'rxjs/Observable';
import { Address } from './../models/address';
import { FireDateService } from './../fire-date.service';
import { Employee } from './../models/employee';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: Employee;
  constructor(private fd: FireDateService) { }

  address: Address = new Address('', '', '', '', '', '', '');
  ngOnInit() {
    // if (this.employee.addressID) {
    //   this.fd.getAddressByID(this.employee.addressID).subscribe(address => {
    //     this.employee.address = address; });
    // }
    // if (!this.employee.address) {
    //   this.employee.address = this.address;
    // }
  }
  restForm(form: NgForm) {
    form.reset();
  }
  save(form: NgForm ) {
    console.log('ID.' + this.employee.id);
    if (this.employee.id.length === 0 && form.valid && form.dirty) {
    this.fd.addEmployee(this.employee);
    form.reset();
    }else if ( this.employee.id.length !== 0 && form.valid && form.dirty) {
 //     if ( this.employee.address.id.length === 0 ) {
       // this.employee.address = null;
 //     }
      this.fd.updateEmployee(this.employee);
    }

  }
  deleteEmployee(employee: Employee ) {
    if (employee.id.length !== 0) {
    this.fd.deleteEmployee(employee);
    this.address = new Address('', '', '', '', '', '', '');
    this.employee = new Employee ('', 0, '', '', false, '', '', '', this.address );
    }
  }
  newEmp( form: NgForm) {
   // form.reset();
    this.address = new Address('', '', '', '', '', '', '');
    this.employee = new Employee ('', 0, '', '', false, '', '', '', this.address );
    form.reset();
  }

}
