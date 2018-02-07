import { Address } from './address';

export class Employee {
    constructor (
        public id: string,
        public employeeNo: number,
        public firstName: string,
        public lastName: string,
        public active: boolean,
        public picURL?: string,
        public company?: string,
        public addressID?: string,
        public address?: Address
     ) { }
    //  public toDto = (): EmployeeDto => {
    //     return {
    // employeeNo: this.employeeNo,
    //  firstName: this.firstName,
    //  lastName: this.lastName,
    //  active: this.active,
    //  picURL?: this.picURL,
    //  company?: this.company ? this.company : null,
    //  addressID?: string
    //     };
    //  }
}

export interface EmployeeDto {
    id: string;
     employeeNo: number;
     firstName: string;
     lastName: string;
     active: boolean;
     picURL?: string;
     company?: string;
     addressID?: string;
}
