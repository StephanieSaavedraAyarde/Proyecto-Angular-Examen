import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../model/products.model';

@Component({
  template: `
    <menu></menu>
    <div class="container">
      <div class="form-row align-items-center">
        <div class="col-md-9">
          <div class="input-group mb-4 mt-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Busqueda de productos</div>
            </div>
            <input
              [(ngModel)]="searchText"
              class="form-control"
              placeholder="Busca tu producto favorito! "
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class=" mb-4 mt-2">
            <select class="form-control" [(ngModel)]="sortOption">
              <option value="product_name|asc"
                >Ordenar por nombre (A a Z)</option
              >
              <option value="product_name|desc"
                >Ordenar por nombre (Z a A)</option
              >
              <option value="product_price|lth"
                >Ordenar por precio (Bajo a Alto)</option
              >
              <option value="product_price|htl"
                >Ordenar por precio (Alto a Bajo)</option
              >
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <productslist-dir
            (refresh)="ref($event)"
            [allProductList]="products.data"
            [searchedText]="searchText"
            [sortingBy]="sortOption"
          ></productslist-dir>
        </div>
        <div class="col-md-5">
          <cart *ngIf="cartflag"></cart>
        </div>
      </div>
    </div>
  `
})
export class ProductsPage {
  public cartflag: boolean = false;
  public sortBy: string = '';
  public sortOption: string = 'product_name|asc';
  constructor(public products: ProductsModel) {}
  ngOnInit() {
    this.ref();
  }
  ref() {
    this.cartflag = false;
    setTimeout(() => {
      this.cartflag = true;
    }, 10);
  }
}
