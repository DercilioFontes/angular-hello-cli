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
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  data: number[];

  constructor(_productService: ProductService) {
    this.data = _productService.getData();
  }

  ngOnInit() {}
}
