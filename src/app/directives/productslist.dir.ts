import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'productslist-dir',
  templateUrl: './productslist.html ',
  styles: [
    `
      input {
        margin: 5px;
      }
      img {
        height: 120px;
        width: auto;
      }
      .col-md-4 {
        margin-bottom: 20px;
      }
    `
  ]
})
export class ProductsListDir {
  constructor(public storage: StorageService, public cart: CartService) {}

  @Input('allProductList') __allprdts: any = {};
  @Input('searchedText') __searchedProduct: string = '';
  @Input('sortingBy') sortByOption: string = '';

  @Output() refresh: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.sortByOption = 'product_name';
  }
  addToCart(productId, productQty) {
    this.cart.allItems = this.__allprdts;
    this.cart.addToCart(productId, productQty, '');
    this.refresh.emit(true);
  }
}
