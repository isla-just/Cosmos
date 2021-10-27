import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { LikesComponent } from './likes/likes.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ItemsComponent } from './items/items.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AltNavComponent } from './alt-nav/alt-nav.component';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    LikesComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    ItemsComponent,
    SingleItemComponent,
    ProductInfoComponent,
    AltNavComponent,
    CartComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
