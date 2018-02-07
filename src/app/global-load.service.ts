import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable, OnInit } from '@angular/core';
import { Item } from './models/item';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalLoadService {
  public orderCategories: Item[];
  public productCategories: Item[];
  private itemsOb: Observable<Item[]>;
  public cats: Item[];
  constructor(public db: AngularFirestore) {
     this.cats = new Array<Item>();
  }
  init() {
    this.itemsOb = this.db.collection<Item>('item').valueChanges();
    this.itemsOb.subscribe(items => {
      this.cats = items;
      this.productCategories = this.cats.filter((item: Item) => item.cat === 'ProductCategory');
      this.orderCategories = this.cats.filter((item: Item) => item.cat === 'OrderCategory');
    });
   }
   getStatus(id: number, cat: string): Item {
      return this.cats.filter((item: Item) => item.cat === cat && item.itemID === id )[0];
   }
  getProductCategories(): Item[] {
    // if (!this.productCategories) {
      this.init();
     return this.productCategories;
  //  } else {
  //    return this.productCategories;
  //  }
  }

}
