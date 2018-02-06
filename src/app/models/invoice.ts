export class Invoice {
    constructor (
        public id: string,
        public invoiceID: number,
        public orderID: number,
        public invoiceDate: Date,
        public dueDate: Date,
        public tax: number,
        public shipping: number,
        public ammountdue: number
    ) { }
}
