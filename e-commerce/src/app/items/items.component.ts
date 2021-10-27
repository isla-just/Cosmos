import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  image1: string = '';
  name1: string = '';
  price1: string = '';
  id1: string = '';

  image2: string = '';
  name2: string = '';
  price2: string = '';
  id2: string = '';

  image3: string = '';
  name3: string = '';
  price3: string = '';
  id3: string = '';

  image4: string = '';
  name4: string = '';
  price4: string = '';
  id4: string = '';

  image5: string = '';
  name5: string = '';
  price5: string = '';
  id5: string = '';

  image6: string = '';
  name6: string = '';
  price6: string = '';
  id6: string = '';

  image7: string = '';
  name7: string = '';
  price7: string = '';
  id7: string = '';

  image8: string = '';
  name8: string = '';
  price8: string = '';
  id8: string = '';

  image9: string = '';
  name9: string = '';
  price9: string = '';
  id9: string = '';

  image10: string = '';
  name10: string = '';
  price10: string = '';
  id10: string = '';

  image11: string = '';
  name11: string = '';
  price11: string = '';
  id11: string = '';

  image12: string = '';
  name12: string = '';
  price12: string = '';
  id12: string = '';

  image13: string = '';
  name13: string = '';
  price13: string = '';
  id13: string = '';

  image14: string = '';
  name14: string = '';
  price14: string = '';
  id14: string = '';

  image15: string = '';
  name15: string = '';
  price15: string = '';
  id15: string = '';

  image16: string = '';
  name16: string = '';
  price16: string = '';
  id16: string = '';

  constructor() { 

    this.image1 = products.products[0].image[0];
    this.name1 = products.products[0].name;
    this.price1 = products.products[0].price;
    this.id1 = products.products[0].id;

    this.image2 = products.products[1].image[0];
    this.name2 = products.products[1].name;
    this.price2 = products.products[1].price;
    this.id2 = products.products[1].id;

    this.image3 = products.products[2].image[0];
    this.name3 = products.products[2].name;
    this.price3 = products.products[2].price;
    this.id3 = products.products[2].id;

    this.image4 = products.products[3].image[0];
    this.name4 = products.products[3].name;
    this.price4 = products.products[3].price; 
    this.id4 = products.products[3].id;

    this.image5 = products.products[4].image[0];
    this.name5 = products.products[4].name;
    this.price5 = products.products[4].price; 
    this.id5 = products.products[4].id;

    this.image6 = products.products[5].image[0];
    this.name6 = products.products[5].name;
    this.price6 = products.products[5].price; 
    this.id6 = products.products[5].id;

    this.image7 = products.products[6].image[0];
    this.name7 = products.products[6].name;
    this.price7 = products.products[6].price; 
    this.id7 = products.products[6].id;

    this.image8 = products.products[7].image[0];
    this.name8 = products.products[7].name;
    this.price8 = products.products[7].price; 
    this.id8 = products.products[7].id;

    this.image9 = products.products[8].image[0];
    this.name9 = products.products[8].name;
    this.price9 = products.products[8].price; 
    this.id9 = products.products[8].id;

    this.image10 = products.products[9].image[0];
    this.name10 = products.products[9].name;
    this.price10 = products.products[9].price; 
    this.id10 = products.products[9].id;

    this.image11 = products.products[10].image[0];
    this.name11 = products.products[10].name;
    this.price11 = products.products[10].price; 
    this.id11 = products.products[10].id;

    this.image12 = products.products[11].image[0];
    this.name12 = products.products[11].name;
    this.price12 = products.products[11].price; 
    this.id12 = products.products[11].id;

    this.image13 = products.products[12].image[0];
    this.name13 = products.products[12].name;
    this.price13 = products.products[12].price; 
    this.id13 = products.products[12].id;

    this.image14 = products.products[13].image[0];
    this.name14 = products.products[13].name;
    this.price14 = products.products[13].price; 
    this.id14 = products.products[13].id;

    this.image15 = products.products[14].image[0];
    this.name15 = products.products[14].name;
    this.price15 = products.products[14].price; 
    this.id15 = products.products[14].id;

    this.image16 = products.products[15].image[0];
    this.name16 = products.products[15].name;
    this.price16 = products.products[15].price; 
    this.id16 = products.products[15].id;

  }

  ngOnInit(): void {
  }

}
