import { Component,Input } from '@angular/core';
import { Item } from './Item';



@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.html',
})
export class ProductsCartComponent {
 
    @Input() obj! : any;

    product : any
    ngOnInit(): void {



        this.product = JSON.parse(localStorage.getItem(this.obj.key)|| '{}')
      }

}