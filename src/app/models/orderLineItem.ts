import { InventoryTransection } from './inventoryTransection';
import { Item } from './item';
import { Product } from './product';

export class OrderLineItem {
    constructor (
        public id: string,
        public product: Product,
        public quantity: number,
        public unitPrice: number,
        public status: Item,
        public dateAllocated: Date,
        public dateReceived: Date,
        public inventory: InventoryTransection,
        public postedToInvintory?: boolean,
        public discount?: number
    ) {}
}
