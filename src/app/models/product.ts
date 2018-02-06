export class Product {
    constructor (
        public id: string,
        public productID: number,
        public productCode: string,
        public productName: string,
        public description: string,
        public standardCost: number,
        public listPrice: number,
        public reorderLevel: number,
        public quantityPerUnit: string,
        public active: boolean,
        public productCategory?: number
    )  { }
}
