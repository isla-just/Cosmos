import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  image1: string = '';
  name1: string = '';
  price1: string = '';
  id1: string = '';
  size1: string = '';
  type1: string = '';
  skin1: string = '';

  image2: string = '';
  name2: string = '';
  price2: string = '';
  id2: string = '';
  size2: string = '';
  type2: string = '';
  skin2: string = '';

  constructor() {

    this.image1 = products.products[10].image[0];
    this.name1 = products.products[10].name;
    this.price1 = products.products[10].price;
    this.id1 = products.products[10].id;
    this.size1 = products.products[10].size;
    this.type1 = products.products[10].type;
    this.skin1 = products.products[10].skintypes[0];

    this.image2 = products.products[4].image[0];
    this.name2 = products.products[4].name;
    this.price2 = products.products[4].price;
    this.id2 = products.products[4].id;
    this.size2 = products.products[4].size;
    this.type2 = products.products[4].type;
    this.skin2 = products.products[4].skintypes[0];

   }

  ngOnInit(): void {
  }

}
