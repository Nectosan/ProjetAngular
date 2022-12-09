import { Component, OnInit } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './cart.html',
  styleUrls: ['./app.component.css']
})

export class CartComponent implements OnInit{
  ngOnInit(): void {

    if(localStorage!=null){
      for (let i = 0; i <= localStorage.length; i++) {       
        var key = localStorage.key(i);
        if(key!=null){
          var a=JSON.parse(localStorage.getItem(key)|| '{}')
          this.total=this.total+parseInt(a.specifications.price)
        }
      }
      
    }

  }

 
cart = localStorage
test: Item[] = []; 
total : number =0

delete(event : any){
  var object = JSON.parse(event.value|| '{}')

  var data = localStorage.getItem(object.id);

  if (data != null) {
    let cart= JSON.parse(data);
     cart.quantity = cart.quantity -1;

  if(cart.quantity==0){
    localStorage.removeItem(object.id)

  }
  else{
      localStorage.setItem(object.id, JSON.stringify(cart));
  }

     this.cart = {...localStorage}
     this.total-=parseInt(cart.specifications.price)

  }


  this.cart = {...localStorage}

}

  add(event : any){
    var object =JSON.parse(event.value|| '{}')
 
    var data = localStorage.getItem(object.id);

    if (data != null) {
        let cart= JSON.parse(data);
          cart.quantity = cart.quantity +1;
         localStorage.setItem(object.id, JSON.stringify(cart));

         console.log(cart)

         this.cart = {...localStorage}
         this.total+=parseInt(cart.specifications.price)

    }

  }


  
}