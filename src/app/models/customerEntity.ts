import { CustomerInt } from './customerInt';

export class CustomerEntity implements CustomerInt {
    constructor (
        public id: string,
        public customerID: number,
        public firstName: string,
        public lastName: string,
        public active: boolean,
        public picURL?: string,
        public company?: string,
        public addressID?: string
     ) { }
}
