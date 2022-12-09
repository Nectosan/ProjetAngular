import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products';
import { CartComponent } from './Cart';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header';
import { ShopComponent } from './shop';
import { ProductsCartComponent } from './product-cart';
import { OrderComponent } from './order';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    HeaderComponent,
    ShopComponent,
    ProductsCartComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
