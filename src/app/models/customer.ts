import { CustomerInt } from './customerInt';
import { Address } from './address';
import { CustomerEntity } from './customerEntity';

export class Customer implements CustomerInt {
    customerEntity: CustomerEntity;
    constructor (
        public id: string,
        public customerID: number,
        public firstName: string,
        public lastName: string,
        public active: boolean,
        public picURL?: string,
        public company?: string,
        public addressID?: string,
        public address?: Address
     ) {
        this.customerEntity = new CustomerEntity(this.id, this.customerID, this.firstName, this.lastName,
            this.active, this.picURL, this.company, this.addressID);
      }
      updateEnt() {
        this.customerEntity.id = this.id;
        this.customerEntity.customerID = this.customerID;
        this.customerEntity.firstName = this.firstName;
        this.customerEntity.lastName = this.lastName;
        this.customerEntity.active = this.active;
        this.customerEntity.picURL = this.picURL;
        this.customerEntity.company = this.company;
        this.customerEntity.addressID = this.addressID;
      }
     getEntity() {
         // update entity
         this.updateEnt();
         return this.customerEntity;
     }
}
