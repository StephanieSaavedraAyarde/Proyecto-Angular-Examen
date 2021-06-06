import { Component } from '@angular/core';
import { BillingFormModel } from '../../model/billingformfields.model';

@Component({
  template: `
    <menu></menu><br />
    <h2 class="text-center font-italic mb-3">Carrito de compra</h2>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-8 order-md-1">
          <div class="card">
            <h5 class="card-header bg-info bg-light">Informacion de Pago</h5>
            <div class="card-body">
              <billing-dir [billingFields]="billing.data"></billing-dir>
            </div>
          </div>
        </div>
        <div class="col-md-4 order-md-2 mb-4">
          <billing-cart *ngIf="cartflag"></billing-cart>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card-header {
        background-color: #579eaf38 !important;
      }
    `
  ]
})
export class BillingPage {
  public cartflag: boolean = false;
  constructor(public billing: BillingFormModel) {}

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
