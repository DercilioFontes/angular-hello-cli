import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  data = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

  getData = () => this.data;

}
