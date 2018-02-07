import { EmployeeEntity } from './models/employeeEntity';
import { Product } from './models/product';
import { CustomerEntity } from './models/customerEntity';
import { CustomerInt } from './models/customerInt';
import { Customer } from './models/customer';
import { Address } from './models/address';
import { Employee } from './models/employee';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FireDateService {
  employees: Observable<Employee[]>;
  employee: Observable<Employee>;
  employeeDoc: AngularFirestoreDocument<Employee>;
  employeeEnt: EmployeeEntity;
  private employeeCollection: AngularFirestoreCollection<Employee>;
  customers: Observable<Customer[]>;
  customer: Observable<CustomerEntity>;
  customerDoc: AngularFirestoreDocument<CustomerEntity>;
  customerCollection: AngularFirestoreCollection<CustomerEntity>;
  productCollection: AngularFirestoreCollection<Product>;
  productDoc: AngularFirestoreDocument<Product>;
  product: Observable<Product>;
  products: Observable<Product[]>;
  address: Observable<Address>;
  selectedEmployee: Employee;
  currentEmployee: Employee;
  constructor(public db: AngularFirestore) {
    this.employeeCollection = db.collection<Employee>('employee');
    this.productCollection = db.collection<Product>('product');
    this.customerCollection = db.collection<CustomerEntity>('customer');
    // TODO: set Current Employee
     this.getEmployees().subscribe(employees => { this.currentEmployee = employees[0]; });

   }
   getEmployees() {
    this.employees = this.employeeCollection.snapshotChanges().map(actions => {return actions.map(a => {
      const data = a.payload.doc.data() as Employee;
      data.id = a.payload.doc.id;
      if (data.addressID.length > 0) {
      this.getAddressByID(data.addressID).subscribe(address => {
        data.address = address;
      }); } else { data.address = new Address('', '', '', '', '', '', ''); }
              return data;
    }); });
     return this.employees;
   }
   getCustomers() {
    this.customers = this.customerCollection.snapshotChanges().map(actions => {return actions.map(a => {
      const data = a.payload.doc.data() as Customer;
      data.id = a.payload.doc.id;
      if (data.addressID.length > 0) {
      this.getAddressByID(data.addressID).subscribe(address => {
        data.address = address;
      }); } else { data.address = new Address('', '', '', '', '', '', ''); }
              return data;
    }); });
     return this.customers;
   }
   getProducts() {
    this.products = this.db.collection<Product>('product').snapshotChanges().map(act => { return  act.map(a => {
      const data = a.payload.doc.data() as Product;
      data.id = a .payload.doc.id;
      return data;
       }); });
       return this.products;
  }
   getAddressByID(addressID: string) {
     this.address = this.db.doc<Address>('address/' + addressID).valueChanges();
     // console.log('address:' + this.address);
     return this.address;
   }
   deleteEmployee(employee: Employee) {
      this.employeeDoc = this.db.doc(`employee/${employee.id}`);
      this.employeeDoc.delete();
   }
   deleteCustomer(customer: CustomerEntity) {
    this.customerDoc = this.db.doc(`customer/${customer.id}`);
    this.customerDoc.delete();
 }
   updateEmployee(employee: EmployeeEntity) {
    this.employeeDoc = this.db.doc(`employee/${employee.id}`);
   this.employeeEnt =  new EmployeeEntity(
     employee.id,
     employee.employeeNo,
     employee.firstName,
     employee.lastName,
     employee.active,
     employee.picURL,
     employee.company,
     employee.addressID);
    this.employeeDoc.update( JSON.parse(JSON.stringify(this.employeeEnt)) );
 }
 updateProduct(product: Product) {
  this.productDoc = this.db.doc(`product/${product.id}`);
 // console.log('e up' + employee.addressID + employee.address);
  this.productDoc.update(JSON.parse(JSON.stringify(product)));
}
 updateCustomer(customer: CustomerEntity) {
  this.customerDoc = this.db.doc(`customer/${customer.id}`);
 // console.log('e up' + customer.addressID + customer.address);
  this.customerDoc.update(JSON.parse(JSON.stringify(customer)));
}
  addAddress(address: Address) {
    const id = this.db.createId();
  }
   addEmployee(employee: Employee) {
     const id = this.db.createId();
     const emp = {
        id,
        employeeNo: employee.employeeNo,
        firstName: employee.firstName,
        lastName: employee.lastName,
        active: employee.active,
        picURL: employee.picURL,
        company: employee.company,
        addressID: employee.addressID
      };
    this.employeeCollection.add(emp);
   }
   addCustomer(customer: CustomerEntity) {
    const id = this.db.createId();
    const cus = {
       id,
       customerID: customer.customerID,
       firstName: customer.firstName,
       lastName: customer.lastName,
       active: customer.active,
       picURL: customer.picURL,
       company: customer.company,
       addressID: customer.addressID
     };
   this.customerCollection.add(cus);
  }
  addProduct(product: Product) {
    const id = this.db.createId();
    const prd = {
      id,
      productID: product.productID,
      productCode: product.productCode,
      productName: product.productName,
      description: product.description,
      standardCost: product.standardCost,
      listPrice: product.listPrice,
      reorderLevel: product.reorderLevel,
      quantityPerUnit: product.quantityPerUnit,
      active: product.active,
      productCategory: product.productCategory
    };
    this.productCollection.add(prd);
    console.log('Add');
  }
//    getCustomers() {
//      this.customers = this.db.collection<Customer>('customer').snapshotChanges().map(act => {return act.map(a => {
// const data = a.payload.doc.data() as Customer;
// data.id = a .payload.doc.id;
// return data;

//      }); });
//      return this.customers;
//    }

}
