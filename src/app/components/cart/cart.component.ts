import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService){}

  cart: Array<CartItem> = [];

  ngOnInit(){
    this.cartService.items$.subscribe(res=>this.cart=res.items);
  }

  onClickIncrement(id:number){
    this.cartService.incrementCount(id);
  }

  onClickDecrement(id:number){
    this.cartService.decrementCount(id);
  }

  onClickCheckout(){
    window.alert('You have sucessfully checkedout the products.');
  }

}
