import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SingleItemComponent } from './single-item/single-item.component';


const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'shop', component:ShopComponent},
{path: 'individual', component:SingleItemComponent},
{path: 'cart', component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }