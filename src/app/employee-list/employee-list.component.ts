import { Address } from './../models/address';
import { Employee } from './../models/employee';
import { FireDateService } from './../fire-date.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  selectedEmployee: Employee;
  employees: Employee[];
  constructor(private fd: FireDateService) { }

  ngOnInit() {
    this.fd.getEmployees().subscribe(employees => { this.employees = employees; });
  }
  selectEmployee(employee: Employee) {
   // this.fd.selectedEmployee = employee;
console.log('ll' + employee.addressID && employee.address);

   if (employee.addressID && employee.address) {
    this.fd.getAddressByID(employee.addressID).subscribe(address => {
      employee.address = address;
      this.selectedEmployee = employee;
    });
   } else {
    employee.address = new Address('', '', '', '', '', '', '');
    this.selectedEmployee = employee;
   }
  }
  onSelectedChange() {
  }

}
