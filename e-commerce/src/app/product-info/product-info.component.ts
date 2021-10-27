import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  image: string = '';
  name: string = '';
  price: string = '';
  brand: string = '';
  description: string = '';
  ingredients: string = '';
  type: string = '';
  skintypes: string = '';

  constructor(private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      console.log(params.id);

   var id = params.id;




    this.image = products.products[id].image[0];
    this.name = products.products[id].name;
    this.price = products.products[id].price;
    this.brand = products.products[id].brand;
    this.description = products.products[id].description;
    this.ingredients = products.products[id].ingredients;
    this.type = products.products[id].type;
    
    this.skintypes = products.products[id].skintypes[0];
    });
  }

  ngOnInit(): void {
  }

}
