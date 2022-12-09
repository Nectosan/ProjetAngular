import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './Item';


@Component({
  selector: 'products-details',
  templateUrl: './products.html',
})
export class ProductsComponent {
 
 @Input() obj! : Item;
 @Output() valueChange = new EventEmitter();
    name="My products"


add(event : any){
  var test = JSON.stringify(event)
  var cart = JSON.parse(test)
  cart.quantity = cart.quantity +1;
  test = JSON.stringify(cart)

localStorage.setItem(event.id.toString(),test)
}

valueChanged(){
  this.valueChange.emit(this.name);
}

valueReset(){
  this.valueChange.emit("Angular");
}
}