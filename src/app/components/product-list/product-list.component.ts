import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = product;

  constructor() { }

  ngOnInit(): void {
  }

}
