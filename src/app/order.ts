import { Component,Input } from '@angular/core';
import { Item } from './Item';



@Component({
  selector: 'order',
  templateUrl: './order.html',
})
export class OrderComponent {
 
    @Input() obj! : any;

    test : any
    ngOnInit(): void {



        this.test = JSON.parse(localStorage.getItem(this.obj.key)|| '{}')
      }


}