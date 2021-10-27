import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  image1: string = '';
  name1: string = '';
  price1: string = '';

  image2: string = '';
  name2: string = '';
  price2: string = '';

  image3: string = '';
  name3: string = '';
  price3: string = '';

  image4: string = '';
  name4: string = '';
  price4: string = '';

  constructor() {

    this.image1 = products.products[0].image[0];
    this.name1 = products.products[0].name;
    this.price1 = products.products[0].price;

    this.image2 = products.products[1].image[0];
    this.name2 = products.products[1].name;
    this.price2 = products.products[1].price;

    this.image3 = products.products[2].image[0];
    this.name3 = products.products[2].name;
    this.price3 = products.products[2].price;

    this.image4 = products.products[3].image[0];
    this.name4 = products.products[3].name;
    this.price4 = products.products[3].price;
   }

  ngOnInit(): void {
  }

}
