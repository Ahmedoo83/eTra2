import { Address } from './../models/address';
import { Observable } from 'rxjs/Observable';
import { Employee } from './../models/employee';
import { FireDateService } from './../fire-date.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
@Input() employee: Employee;
//  employee: Employee;
  // employees: Employee[];  // Observable<Employee[]>;
 //  lent = 5;
  address: Address = new Address('', '', '', '', '', '', '');
  constructor(private fd: FireDateService) {

   }
   getEmployees() {
     // this.employee = this.employees[1];
   //  return this.employees;
   }
  ngOnInit() {
    if (this.employee.addressID) {
      this.fd.getAddressByID(this.employee.addressID).subscribe(address => {
        this.employee.address = address; });
    }
    if (!this.employee.address) {
      this.employee.address = this.address;
    }
  }

}
