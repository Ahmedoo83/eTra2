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
}
