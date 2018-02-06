import { Address } from './address';

export class Supplaier {
    constructor (
        public id: string,
        public supplaierID: number,
        public firstName: string,
        public lastName: string,
        public active: boolean,
        public picURL?: string,
        public company?: string,
        public address?: Address
     ) { }
}
