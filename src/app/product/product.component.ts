import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  template: `
    <ul>
      <li *ngFor="let d of data">
        product works!
        {{ d }}
      </li>
    </ul>
    <input placeholder="Product name" (input)="onInputEvent($event)" />
    <button (click)="onClickEvent('clicked')">Get click</button>
    <p>
      <span [hidden]="isValid">{{ input }}</span>
    </p>
    <input
      type="text"
      placeholder="Enter shipping address"
      [(ngModel)]="shippingAddress"
    />
    <button (click)="shippingAddress = '123 Main Street'">
      Set Default Address
    </button>
    <p>The shipping address is {{ shippingAddress }}</p>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  data: number[];
  isValid: boolean;
  input: string;

  constructor(_productService: ProductService) {
    this.data = _productService.getData();
    this.isValid = false;
    this.input = 'input';
  }

  ngOnInit() {}

  onClickEvent = (str: string) => (this.isValid = !this.isValid);

  onInputEvent = (input: any) => (this.input = input.target.value);
}
