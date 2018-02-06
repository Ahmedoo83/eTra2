import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Item } from './models/item';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalLoadService {
  public orderCategories: Item[];
  public productCategories: Item[];
  private itemsOb: Observable<Item[]>;
  private cats: Item[];
  constructor(public db: AngularFirestore) {
    // this.db.collection<Item>('item').valueChanges().subscribe(items => { this.cats = items; });
    // this.orderCategories = this.cats.filter((item: Item) => item.cat === 'ProductCategory');
    // console.log('Cats' + this.productCategories);
  }
  getProductCategories() {
    this.itemsOb = this.db.collection<Item>('item').valueChanges();
    this.itemsOb.subscribe(items => {this.cats = items; });
    // this.db.collection<Item>('item').valueChanges().subscribe(items => { this.cats = items;
    //   console.log('Cats' + items.length); });
    // this.db.collection<Item>('item').snapshotChanges().map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as Item;
    //       const id = a.payload.doc.id;
    //       return {id, data };
    //     });
    //   });
    this.orderCategories = this.cats.filter((item: Item) => item.cat === 'ProductCategory');
  //  console.log('Cats' + this.productCategories);

    return this.productCategories;
  }

}
