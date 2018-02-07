export class EmployeeEntity {
    constructor (
        public id: string,
        public employeeNo: number,
        public firstName: string,
        public lastName: string,
        public active: boolean,
        public picURL?: string,
        public company?: string,
        public addressID?: string,
     ) { }
}
