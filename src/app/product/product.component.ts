import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products : Product[] = [
    { "id"  : 1,
      "name" : "Honda Civic '11",
      "price" : 55000.0,
      "category"  : "Sedan",
    }

  ];



}
