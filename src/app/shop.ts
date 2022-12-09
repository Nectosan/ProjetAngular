import { Component  } from '@angular/core';
import { PRODUCTS } from './listProducts';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
})
export class ShopComponent {

   
    products = PRODUCTS


    name = 'Angular';


  
    displayCounter(newName: string){
      this.name = newName;
    }
  }

 
