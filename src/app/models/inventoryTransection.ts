import { Item } from './item';
import { Product } from './product';
import { Order } from './order';
export class InventoryTransection {
    constructor(
        public id: string,
        public transectionID: number,
        public transactionType: Item,
        public transactionCreatedDate: Date,
        public transactionModifiedDate: Date,
        public product: Product,
        public quantity: number,
        public order: Order,
        public comments?: string

    ) { }
}
