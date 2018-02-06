import { OrderLineItem } from './orderLineItem';
import { Supplaier } from './supplier';
import { Customer } from './customer';
import { Employee } from './employee';
import { Item } from './item';
export class Order {
    constructor (
        public id: string,
        public employee: Employee,
        public orderDate: Date,
        public shipping: Item,
        public shipDate: Date,
        public paymentType: Item,
        public paidDate: Date,
        public status: Item,
        public taxStatus: Item,
        public orderType: number,
        public customer?: Customer,
        public supplaier?: Supplaier,
        public taxRate?: number,
        public taxes?: number,
        public shippingFee?: number,
        public note?: string,
        public lineItems?: OrderLineItem[]
    ) {}
}
